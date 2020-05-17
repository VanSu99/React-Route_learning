
### TẢN MẠN VỀ REACT ROUTER

- Version hiện tại là v6.
- Tạo ứng dụng SPA chuyển trang -> không load lại trang (Link & NavLink).
- activeStyle, activeClassName: thay đổi trạng thái đối với route hiện hành.
- Lấy tham số URL: đối tượng match.
- Prompt: bảng notify cho người dùng.
- Redirect

### CÀI ĐẶT REACT ROUTER

💻 npm install --save react-router-dom

### Các thành phần trong React Router

- Component NavLink cho phép bạn hiển thị menu theo dạng như navbar trong bootstrap.
- exact: dùng để chỉ định sẽ hiển thị component khi và chỉ khi đúng chính xác đường dẫn của path.
- path: đường dẫn trên url nhận vào. Nếu bạn muốn nhiều path cùng hiển thị một component thì sử dụng các đường dẫn trong dấu ngoặc tròn, ngăn cách nhau bởi dấu gạch đứng.
    🍣 Ví dụ minh họa: 
    
    <Route exact path="/(Dashboard|)">
        <Dashboard /> // component sẽ hiển thị tương ứng với path được đặt ra ở trên
    </Route>

- BrowserRouter : được sử dụng phổ biến hơn, nó sử dụng History API có trong HTML5 để theo dõi lịch sử bộ định tuyến của bạn.
- <Link> : tương tự giống như thẻ <a> trong HTML, dùng để chuyển hướng page.
            to : giống như href trong thẻ <a>
    🍣 Ví dụ minh họa: <Link to="/about">About</Link>

- Match : lấy thông tin ở trên URL.

- Redirect : dùng để chuyển trang.

- Switch : tác dụng giống như Switch...case vậy.

### CÁCH SỬ DỤNG ROUTE

📌 Bước 1: phân chia những page cần show trong folder Component.

📌 Bước 2: tạo một component có nhiệm vụ điều hướng các router.

📌 Bước 3: sẽ đặt tất cả vào trong component Router.
    🍣 Ví dụ minh họa: ./src/App.js

    <Router>
        <DieuHuong />
    </Router>

### REACT ROUTE PARAMETERS

- Đơn giản, dễ hiểu là tạo ra 1 router có thể truyền biến lên URL.
- Dùng React Hook để lấy id ra.
- Dùng phương pháp nối chuỗi.

<!-- - Dùng thẻ <Link to={`/blog/${id}`}> -->

-> Sau đó, vào Cpt BlogDetail để lấy id ra bằng cách dùng Hook (useParams) hoặc Props thông qua location hoặc match.params.tên_id

⚙ Workflow:
    + ListBlog sẽ render danh sách bài viết bằng hàm map() của array.
        - trong mỗi bài viết sẽ có 1 Link trỏ id qua BlogDetal. 
    + BlogDetail -> dùng useParams() để lấy id về.
        - khi có id rồi sẽ request lên Server để lấy nội dung chi tiết của bài viết về => render ra View.

📣 Lưu ý: content của 1 bài viết chẳng hạn sẽ được là HTML được lưu ở Database ở dạng text nên nếu render bình thường ra thì sẽ ra luôn thẻ HTML 
    => tham khảo: *** dangerouslySetInnerHTML={{ __html: content_render }} ***

### XÁC THỰC ROUTE

- Sử dụng if/else
- Để nâng cao hiệu quả tính xác thực thì dùng higher-order component (HOC) 

### ROUTING THƯỜNG ĐƯỢC SỬ DỤNG

🍣 BrowserRouter
🍣 Router
🍣 Switch
🍣 Redirect
🍣 Link -> thường use cho Component Header Menu.

### TÍNH NĂNG HỖ TRỢ

📌 Sử dụng Lazy Load để load những routing có feature tương ứng.

    🍣 Ví dụ minh họa:
    
        const Photo = React.lazy(() => import('./features/Photo'));

### BỔ SUNG KIẾN THỨC

- export bình thường thì bỏ trong dấu {}

- folder 'constants' sẽ chứa các biến môi trường, biến hằng số, biến cục bộ, hoặc biến liên quan đến UI.



Happy Learning 💗💗💗