
### TẢN MẠN VỀ STYLED COMPONENT

1. tách css ra thành module viết trong Js.
2. Random Class -> không bị trùng tên Class.
3. Dùng Template String ES6 -> chuỗi có thể truyền biến được vào trong.
4. Có thể dùng như 1 Cpt => có thể truyền Props vào CSS.

### CÀI ĐẶT STYLED COMPONENT

📌 npm install --save styled-components

### CÁCH SỬ DỤNG

- Cách dùng cơ bản: 

    const tên_component = styled.nameTag`
        // css
    `;

👉 Ví dụ minh họa: const Card = styled.div``; ==> sẽ CSS cho thẻ <div> của thằng cpt Card này. 


- **Truyền Props vào 1 component**
👉 Ví dụ minh họa:

    const Title = styled.h2`
    color: ${props => props.color};
    /* :default props */
    font-size: ${props => props.size || "30px"};
    `;

    <Title color="blue">list product</Title>

💎💎 Giải thích: component Title có thẻ h2, có props là 'color'. Ta thấy thuộc tính font-size có props là 'size' nhận giá trị là 30px.

- **Kế thừa style component**:
    👉 những Cpt nào được extends sẽ được thừa hường tất cả thuộc tính từ Cpt đó và có thể override lại thuộc tính. Thông qua cú pháp:

    const extendComponent = styled(Component)`
        //conent
    `;
    
👉 Ví dụ minh họa: ta có 2 component là: Product - ProductSpecial -> 2 cpt này sẽ có background-color khác nhau.

    const Product = styled.div`
        height: 100px;
        background-color: #f2f4f7;
        border: solid 1px green;
    `;

    const ProductSpecial = styled(Product)`
        background: darkkhaki;
    `;

💎💎 Giải thích: cpt ProductSpecial sẽ kế thừa cpt Product để sử dụng thuộc tính 'background' để change màu nền cho nó

### ANIMATION

- sử dụng cùng với keyframes của nó.
- nhớ import styled, {keyframes} from "styled-components"
👉 Ví dụ minh họa: tạo animation cho image

    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;
    const Image = styled.img`
        height: 80%;
        width:auto;
        animation: ${rotate} 4s linear infinite;
    `

### SỬ DỤNG CLASS CSS VIẾT SẴN

- Sử dụng bằng cách dùng 'className'

👉 Ví dụ minh họa:

    <Name className="cl-blue">{products[0].name}</Name>


### CÁCH TỔ CHỨC FOLDER CHO PROJECT

 src/
|---index.js
|---App.js
|---components/
|  |---styles/
|  |  |---globalStyles.js
|  |  |---theme.js
|  |  |---mixin.js
|  |  |---images.js
|
|  |---common/
|  |  |---Form/
|  |  |  |---index.jsx
|  |  |  |---styled.js
|  |  |---Table/
|  |  |  |---index.jsx
|  |  |  |---styled.js
|
|  |---layout/
|  |  |---Header/
|  |  |  |---index.jsx
|  |  |  |---styled.js
|  |  |---Footer/
|  |  |  |---index.jsx
|  |  |  |---styled.js
|
|  |---pages/
|  |  |---About/
|  |  |  |---index.jsx
|  |  |  |---styled.js
|  |  |---Contact/
|  |  |  |---index.jsx
|  |  |  |---styled.js


### KẾT LUẬN

- Lợi ích:
    + Style trong component,linh hoạt có thể sửa đổi dễ dàng.
    + Có thể dùng cho react-native.
    + Có thể kế thừa style của component bất kỳ/ sử dụng className.

- Nhược điểm:
    + Nhiều người chưa quen với việc dùng viết css ngay trong file js.
    + Nó sẽ generator (tạo) className ngẫu nhiên, nếu ta ko có className.




