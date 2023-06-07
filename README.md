# React

## Integrate with your tools

- [ ] [Set up project integrations](https://git.miichisoft.net/Miichisoft/templates/react/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

## Project Setup
```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn start
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
### Hướng dẫn sử dụng
```
* Cấu trúc thư mục
- public: Chức thư mục locales, và các file ảnh
    locales: en, ja: Định nghĩa message translate
- src: 
    + @type: Định nghĩa các typescript
    + context: Định nghĩa các context được sử dụng
    + pages: Các màn hình hình trong dự án (Lưu ý đặt tên thư mục giống với trường component trong object router)
    + redux-setup: Cấu hình store và định nghĩa các store
    + routes: Định nghĩa các route để điều hướng
    + service: 
        + api: Khai báo các service api 
        + http: Cấu hình http với các phương thức: get, post, put, patch, delete, ...
    + shared:
        + components: Định nghĩa các component dùng chung.
        + constants: Các biến dùng chung
        + definitions: Khai báo các url api, biến config, ...
        + libs: Định nghĩa các thư viện
        + storage:  các hàm để thao tác với local, session storage
        + theme: Khai báo các biến scss
        + utils: Các hàm common dùng chung

* Đã viết ví dụ mẫu về cách dùng trong các file mẫu.
```