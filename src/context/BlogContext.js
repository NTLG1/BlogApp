//import React, { /*useState*/ useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
import { ActionSheetIOS } from "react-native";

//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
      case 'get-blogposts':
        return action.payload;
      case 'edit_blogpost':
        return state.map((blogPost) => {
          if (blogPost.id == action.payload.id) {
            return action.payload;
          }
          else {
            return blogPost;
          }
          });
      case 'delete_blogpost':
        return state.filter((blogPost) => blogPost.id != action.payload );
      default:
        return state;
    }
  };

//export const BlogProvider = ({children}) => {
    /*const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}` }]);
    };
    */
    //const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const getBlogPosts = dispatch => {
      return async () =>{
        const response = await jsonServer.get('/blogposts')
        //response.data == [{},{},{},...]
        dispatch({type: 'get-blogposts', payload: response.data});
      }
    }

    const addBlogPost = (dispatch) => {
      return async (title, content, callback) => {
      await jsonServer.post('/blogposts', {title: title, content:content});
      if (callback) {
        callback();
      }
    };
    };
    const deleteBlogPost = dispatch =>{
      return async id=> {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id})
      };
    };
    const editBlogPost = (dispatch) => {
      return async (id, title, content, callback) => {
      await jsonServer.put(`/blogposts/${id}`,{title, content})
      dispatch({ 
        type: 'edit_blogpost', 
        payload: {id, title, content} 
      });
      // if callback exist
      if (callback) {
      callback()}
      };
    };

    /*return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>
};
*/

//export default BlogContext;
export const {Context, Provider} = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
  []
  );