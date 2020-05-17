import React from 'react';
import { useParams } from 'react-router-dom';
import { listBlogs } from '../fakeData/listBlog';
import { notification } from 'antd';

function findBlogbyId(id) {
    let listBlogServer = listBlogs;
    console.log('danh sach: ',listBlogServer)

    let findData = listBlogServer.find((blog) => {
        return blog.id === id;
    })
    return findData; 
}

function BlogDetail(props) {

    const data = useParams();
    const blog = findBlogbyId(data.id);
    console.log('return blog: ', {blog})

    if(!blog) {
        notification['error']({
            message: 'Thông Báo',
            description:
              'Bài viết không tồn tại. Vui lòng kiểm tra lại.',
          });
        return <div></div>
    }

    return (
        <div>
            <h2> {blog.title} </h2>
            <p> {blog.content} </p>
        </div>
    );
}

export default BlogDetail;

/*
Workflow:
    + ListBlog sẽ render danh sách bài viết bằng hàm map() của array.
        - trong mỗi bài viết sẽ có 1 Link trỏ id qua BlogDetal. 
    + BlogDetail -> dùng useParams() để lấy id về.
        - khi có id rồi sẽ request lên Server để lấy nội dung chi tiết của bài viết về.

    + Giả lập function findBlogbyId -> tìm ra bài viết trong array fakeData.
*/