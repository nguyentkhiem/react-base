import { Form, Pagination, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { PAGE_LIMIT } from 'shared/constants/variables';

interface Props {
  isShow?: boolean;
  page: number;
  limit?: number;
  total: number;
  onPageChange: (page: number) => void;
  onRecordChange?: (record: number) => void;
}

const { Option } = Select;
export default function BasePagination(props: Props) {
  const { t } = useTranslation();
  const { isShow = true, page, limit, total, onPageChange, onRecordChange } = props;

  const handleRecordChange = (value: number) => {
    if (onRecordChange) {
      onRecordChange(value);
    }
  };

  return isShow ? (
    <div className="pagination-page">
      <Pagination
        size="small"
        showSizeChanger={false}
        total={total}
        showTotal={(total, range) => `${range[0]}-${range[1]}/${total}`}
        current={page}
        pageSize={limit || PAGE_LIMIT}
        defaultPageSize={limit || PAGE_LIMIT}
        onChange={onPageChange}
      />

      <Form.Item style={{ marginLeft: 15 }}>
        <Select onChange={handleRecordChange} defaultValue={limit}>
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="30">30</Option>
        </Select>
      </Form.Item>
    </div>
  ) : (
    <></>
  );
}
