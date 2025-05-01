import BlogTitle from './components/BlogTitle'
import TopNav from './components/TopNav'
import BlogEntry from './components/BlogEntry'
import Footer from './components/Footer'
import './main.css'
// import blogImage1 from '/public/blog-image-1.jpg';
// import blogImage2 from '/public/blog-image-2.jpg';


function App() {
  return (
    <div className="container">
      <BlogTitle />
      <TopNav />
      <main>
        <BlogEntry
          date="11/12/20"
          title="On the Street in Brooklyn"
          image="/blog-image-1.jpg"
          alt="Street fashion in Brooklyn"
          content="Corem ipsum dolor sit amet, consectetur adipiscing elit.  
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  
Nisi ut aliquip ex ea commodo consequat.  
Duis aute irure dolor in reprehenderit in voluptate velit esse.  
Cillum dolore eu fugiat nulla pariatur.  
Excepteur sint occaecat cupidatat non proident.  
Sunt in culpa qui officia deserunt mollit anim id est laborum.  
Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  
Nulla quis sem at nibh elementum imperdiet."
        />
        <hr className="divider" />
        <BlogEntry
          date="11/11/20"
          title="Vintage in Vogue"
          image="/blog-image-2.jpg"
          alt="Street fashion in Brooklyn2"
          content="Sorem ipsum dolor sit amet, consectetur adipiscing elit.  
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  
Nisi ut aliquip ex ea commodo consequat.  
Duis aute irure dolor in reprehenderit in voluptate velit esse.  
Cillum dolore eu fugiat nulla pariatur.  
Excepteur sint occaecat cupidatat non proident.  
Sunt in culpa qui officia deserunt mollit anim id est laborum.  
Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  
Nulla quis sem at nibh elementum imperdiet."
        />
        <hr className="divider" />
      </main>
      <Footer />
    </div>
  );
}

export default App;