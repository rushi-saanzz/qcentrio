import Button from "../global/button";

export default function BlogHero() {
  return (
    <div className="blogs-hero-content">
      <div className="breadcrump">
        HOME <span></span> BLOG
      </div>
      <h1 className="blog-hero-heading">QCENTRIO BLOG</h1>
      <p className="blog-hero-sub-heading">
        Insights to help you bring your best ideas to <br /> life. Subscribe to
        get the best tips, tricks, and <br /> success stories in your inbox.
      </p>
      <div className="lets-talk-container">
        <input type="text" placeholder="Email Address" />
        <div className="input-btn">
          <Button name="Lets Talk" />
        </div>
      </div>
    </div>
  );
}
