import React, { useEffect, useState } from 'react';
import { EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Image, Upload, message } from 'antd';
import { useTranslation } from 'react-i18next';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { UploadService } from 'services/api';
import style from './upload-image.module.scss';

const DEFAULT_FILE_SIZE = 10; // 10MB

interface UploadImageProps {
  disabled?: boolean;
  maxLength?: number;
  initImageData?: Array<string | undefined> | string;
  setUploadData?: (data: string | string[]) => void;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    /* eslint-disable */
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadImage = ({ disabled = false, maxLength = 5, initImageData, setUploadData }: UploadImageProps) => {
  const { t } = useTranslation();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => setPreviewOpen(false);

  const uploadImage = async (file: any) => {
    try {
      const response: any = await UploadService.uploadImage({ data: { file } });

      if (response?.data?.url) {
        return response?.data?.url;
      }
    } catch (error) {
      console.log('error', error);
      return null;
    }
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    const currentFile = newFileList[newFileList?.length - 1] || null;

    if (currentFile) {
      const fileSize = Number(currentFile?.size || 0) / 1024 / 1024;

      if (fileSize && fileSize > DEFAULT_FILE_SIZE) {
        showMessage(false, t('upload_file_max', { size: DEFAULT_FILE_SIZE }));
        return;
      }

      const data = await uploadImage(currentFile?.originFileObj);

      if (data) {
        setFileList(
          newFileList?.map((item) => ({
            ...item,
            status: 'done',
            url: currentFile?.uid === item?.uid ? data : item?.url,
          })),
        );

        if (maxLength === 1) {
          setUploadData && setUploadData(`${data}`);
        } else {
          setUploadData &&
            setUploadData(newFileList?.map((item) => `${currentFile?.uid === item?.uid ? data : item?.url}`));
        }
      }
    }
  };

  const handleOnRemove = (file: UploadFile) => {
    if (file) {
      const newFileList = fileList?.filter((item) => item?.uid !== file?.uid);
      setFileList(newFileList);

      if (!newFileList?.length) {
        if (maxLength === 1) {
          setUploadData && setUploadData('');
        } else {
          setUploadData && setUploadData([]);
        }
      }
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t('upload')}</div>
    </div>
  );

  const ramdomKeyId = () => {
    return Math.floor(Math.random() * 9999999999999);
  };

  const showMessage = (isSuccess: boolean, message: string) => {
    if (isSuccess) {
      messageApi.open({
        type: 'success',
        content: message,
      });
    } else {
      messageApi.open({
        type: 'error',
        content: message || 'error',
      });
    }
  };

  useEffect(() => {
    if (Array.isArray(initImageData)) {
      setFileList(
        initImageData?.map((image: any, index: number) => ({
          uid: `rc-upload-${ramdomKeyId()}-${index + 1}`,
          name: '',
          status: 'done',
          url: image,
        })),
      );
    } else if (typeof initImageData === 'string' && initImageData) {
      setFileList([
        {
          uid: `rc-upload-${ramdomKeyId()}-1`,
          name: '',
          status: 'done',
          url: initImageData,
        },
      ]);
    } else {
      setFileList([]);
    }
  }, [initImageData]);

  return (
    <>
      {contextHolder}
      <div
        className={style.uploadContent}
        style={{
          pointerEvents: disabled ? 'none' : 'auto',
          backgroundColor: disabled ? '#f5f5f5' : '',
        }}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleOnRemove}
          accept={'.png, .gif, .jpeg, .jpg, .webp'}
        >
          {fileList?.length >= maxLength ? null : uploadButton}
        </Upload>
      </div>

      <Image
        style={{ display: 'none' }}
        src={previewImage}
        preview={{
          visible: previewOpen,
          onVisibleChange: (value) => {
            setPreviewOpen(value);
          },
          mask: (
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <EyeOutlined /> <span style={{ marginLeft: 5 }}>{t('preview')}</span>
            </span>
          ),
        }}
      />
    </>
  );
};

export default UploadImage;
