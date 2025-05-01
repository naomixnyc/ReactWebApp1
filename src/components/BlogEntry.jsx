function BlogEntry({ date, title, image, content }) {
    return (
      <div className="blog-entry">
        <div className="entry-date">{date}</div>
        <div className="entry-title">{title}</div>
        {/* <div className="spacer-50" /> */}
        <img src={image} className="entry-image" alt={title} />
        {/* <div className="spacer-50" /> */}
        <p className="entry-content">
          <span className="drop-cap">{content[0]}</span>{content.slice(1)}
        </p>
        <div className="entry-continues">Continues...</div>
      </div>
    );
  }
  
  export default BlogEntry;