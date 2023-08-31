function blog() {
  return (
    <>
      <header role="banner">
        <a>
          <picture className="branding__logo">
            <source
              media="(max-width: 559px)"
              srcSet="https://abookapart.com/cdn/shop/t/4/assets/aba-logo-2.svg?v=5628627351356293221537450559"
              type="image/svg+xml"
            />
            <source
              srcSet="https://abookapart.com/cdn/shop/t/4/assets/aba-logo-2.svg?v=5628627351356293221537450559"
              type="image/svg+xml"
            />
            <img
              srcSet="https://abookapart.com/cdn/shop/t/4/assets/aba-icon.svg?v=99583976875288395861537450559"
              alt="A Book Apart"
              style={{ width: "400px", height: "200px" }}
            />
          </picture>
        </a>
        <div className="site-nav">
          <nav className="site-nav__primary">
            <ul className="snv">
              <a href="/products/">Shop</a>
              <a href="/blogs/press/">Blog</a>
              <a href="/pages/about/">About</a>
            </ul>
          </nav>

          <nav className="site-nav_secondary">
            <ul className="svn">
              <a id="nav-twitter" class="site-nav__social">
                <a
                  href="http://twitter.com/abookapart"
                  class="site-nav__link--icon"
                >
                  <svg
                    className="ini-logo"
                    viewBox="0 0 15 12"
                    width="15"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M15 1.42a6.32 6.32 0 0 1-1.53 1.57v.4c0 4-3.09 8.61-8.75 8.61A8.77 8.77 0 0 1 0 10.77c.24.03.49.05.73.05 1.44 0 2.78-.61 3.82-1.44a3.06 3.06 0 0 1-2.87-2.1 3.25 3.25 0 0 0 1.4-.05A3.04 3.04 0 0 1 .6 4.26v-.04c.41.22.88.36 1.39.38A3 3 0 0 1 .62 2.09c0-.57.16-1.03.42-1.47a8.8 8.8 0 0 0 6.34 3.1 3.04 3.04 0 0 1 3-3.73c.89.01 1.69.39 2.26.97.7-.14 1.35-.4 1.94-.74-.22.7-.7 1.3-1.35 1.68A6.16 6.16 0 0 0 15 1.42z"></path>
                  </svg>
                </a>
              </a>
              <a id="nav-instagram" class="site-nav__social">
                <a
                  href="http://instagram.com/abookapart"
                  class="site-nav__link--icon"
                >
                  <svg
                    className="ini-logo"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M8 0c2.17 0 2.45.01 3.3.05.85.04 1.43.17 1.94.37.53.2.97.48 1.42.92.44.45.72.9.92 1.42.2.5.33 1.09.37 1.94.04.85.05 1.13.05 3.3s-.01 2.45-.05 3.3a5.87 5.87 0 0 1-.37 1.94c-.2.53-.48.97-.92 1.42-.45.44-.9.72-1.42.92-.5.2-1.09.33-1.94.37-.85.04-1.13.05-3.3.05a56.3 56.3 0 0 1-3.3-.05 5.85 5.85 0 0 1-1.94-.37c-.53-.2-.97-.48-1.42-.92a3.9 3.9 0 0 1-.92-1.42c-.2-.5-.33-1.09-.37-1.94C0 10.45 0 10.17 0 8s.01-2.45.05-3.3c.04-.85.17-1.43.37-1.94.2-.53.48-.97.92-1.42.45-.44.9-.72 1.42-.92.5-.2 1.09-.33 1.94-.37C5.55 0 5.83 0 8 0m5.23 3.73a.96.96 0 1 0-1.92 0 .96.96 0 0 0 1.92 0M8 3.89a4.1 4.1 0 1 0 0 8.22 4.1 4.1 0 0 0 0-8.22m0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34"></path>
                  </svg>
                </a>
              </a>
              <a className="ini-logo" id="nav-search">
                <form
                  action="https://abookapart.com/search"
                  method="get"
                  autoComplete="off"
                  id="nav-search-form"
                  acceptCharset="utf-8"
                >
                  <a href="">
                    <svg
                      className="ini-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                    >
                      <path d="M2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m13.88 7.26l-3.85-3.85a6.5 6.5 0 1 0-2.12 2.12l3.85 3.85a.4.4 0 0 0 .57 0l1.55-1.55a.4.4 0 0 0 0-.57"></path>
                    </svg>
                  </a>
                </form>
              </a>
              <ul className="log2">
                <a className="help" href="/src/help/">
                  Help
                </a>
                <a className="sign" href="/account/login/">
                  Sign In
                </a>
              </ul>
              <a
                id="nav-cart"
                className="shopping-cart"
                href="/cart"
                title="View cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 20"
                  width="25"
                  height="20"
                >
                  <path d="M22.1 13.24H9.77L5.5.6C5.4.26 5.05 0 4.67 0H.9C.4 0 0 .4 0 .9s.4.9.9.9H4l4.26 12.63c.12.37.47.6.85.6h13c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm1.94-9.83L8.74 2.1c-.48-.04-.75.3-.6.77l2.67 7.94c.18.47.7.85 1.2.85h11.17c.5 0 .95-.4 1-.9l.68-6.35c.05-.5-.3-.95-.8-1z"></path>
                </svg>
                <span className="shopping__text">Cart</span>
              </a>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main4">
        <div className="content content-with-sidebar1">
          <section id="press-room">
          <h2 className="title">Press Room</h2>
            <li class="press press-listing divider-bottom">
              <h5 class="press-date">Aug 18, 2023</h5>
              <h4 class="press-title">
                <a href="/blogs/press/work-with-purpose">Work with Purpose</a>
              </h4>
              <p>
                <img
                  class="press-thumb"
                  src="//cdn.shopify.com/s/files/1/0051/7692/files/aba-logo_small_small.png?219"
                  alt="ABA logo."
                />
              </p>
              <p>
                How can we make a more intentional, equitable impact with our
                work? Maybe you’re asking yourself the same question (and
                others!)—and we hope some of our books will serve as resources
                to help you find the answers so you can work with purpose.{" "}
                <a href="https://abookapart.com/blogs/press/work-with-purpose">
                  Read on for more
                </a>
                .
              </p>
            </li>
            <li class="press press-listing divider-bottom">
              <h5 class="press-date">Aug 15, 2023</h5>
              <h4 class="press-title">
                <a href="/blogs/press/new-you-deserve-a-tech-union-from-ethan-marcotte">
                  New! You Deserve a Tech Union from Ethan Marcotte
                </a>
              </h4>
              <p>
                <a href="https://abookapart.com/products/design-by-definition">
                  <img
                    class="press-thumb"
                    src="//cdn.shopify.com/s/files/1/0051/7692/files/aba-logo_small_small.png?219"
                    alt="ABA logo."
                  />
                </a>
              </p>
              <p>
                There’s a resurgent labor movement in the tech industry. Tech
                workers—designers, engineers, writers, and many others—have
                learned that when they stand together, they’re poised to build a
                better version of the tech industry. They haven’t stopped there:
                at companies from Kickstarter to Google, workers have formed{" "}
                <em>unions</em>. And you should, too.{" "}
                <a href="https://abookapart.com/blogs/press/new-you-deserve-a-tech-union-from-ethan-marcotte">
                  Read on for more
                </a>
                .
              </p>
            </li>
            <li class="press press-listing divider-bottom">
              <h5 class="press-date">Aug 10, 2023</h5>
              <h4 class="press-title">
                <a href="/blogs/press/preorder-now-surviving-change-at-work-from-vanessa-gennarelli">
                  Preorder Now: Surviving Change at Work from Vanessa Gennarelli
                </a>
              </h4>
              <p>
                <a href="https://abookapart.com/products/surviving-change-at-work">
                  <img
                    alt="ABA logo."
                    src="//cdn.shopify.com/s/files/1/0051/7692/files/aba-logo_small_small.png?219"
                    class="press-thumb"
                  />
                </a>
              </p>
              <p>
                We’re really excited to announce{" "}
                <a href="https://abookapart.com/products/surviving-change-at-work">
                  <em>Surviving Change at Work</em>
                </a>
                , a new book by Vanessa Gennarelli, launching September 12!
                Vanessa Gennarelli is the principal of Fortuna, a change
                management firm, and the chief operating officer for Raise.dev.
                She has led cross-functional teams at rapidly growing
                organizations—and while at one of the largest tech companies on
                the planet, she learned how to navigate cultural differences,
                integrate new processes, and help direct reports thrive through
                change.{" "}
                <a href="https://abookapart.com/blogs/press/preorder-now-surviving-change-at-work-from-vanessa-gennarelli">
                  Read on for more
                </a>
                .
              </p>
            </li>
            <li class="press press-listing divider-bottom">
              <h5 class="press-date">Aug 03, 2023</h5>
              <h4 class="press-title">
                <a href="/blogs/press/sneak-a-peek-at-more-new-titles-2023">
                  Sneak a Peek at (More) New Titles!
                </a>
              </h4>
              <p>
                <img
                  class="press-thumb"
                  src="//cdn.shopify.com/s/files/1/0051/7692/files/aba-logo_small_small.png?219"
                  alt="ABA logo."
                />
              </p>
              <p>
                Here at HQ we’re in the hot homestretch of summer—and as we soon
                head into the crisp, fresh air of fall, we couldn’t wait to tell
                you what’s in store.{" "}
                <a href="https://abookapart.com/blogs/press/sneak-a-peek-at-more-new-titles-2023">
                  Read on for more
                </a>
                .
              </p>
            </li>
            <li class="press press-listing divider-bottom">
              <h5 class="press-date">Jul 31, 2023</h5>
              <h4 class="press-title">
                <a href="/blogs/press/meet-the-book-surviving-change-at-work-by-vanessa-gennarelli">
                  Meet the Book: Surviving Change at Work by Vanessa Gennarelli
                </a>
              </h4>
              <p>
                <img
                  class="press-thumb"
                  src="//cdn.shopify.com/s/files/1/0051/7692/files/aba-logo_small_small.png?219"
                  alt="ABA logo."
                />
              </p>
              <p>
                We can’t wait for you to read{" "}
                <a href="https://abookapart.com/products/surviving-change-at-work">
                  <em>Surviving Change at Work</em>
                </a>
                , a new book by Vanessa Gennarelli, launching September 12. In
                the meantime, we’re giving you a peek into the book with our{" "}
                <a href="https://abookapart.com/blogs/press/tagged/meet-the-book">
                  <span>Meet the Book Q&amp;A series</span>
                </a>
                . Read on to learn how Vanessa helps empower employees to step
                into their power at every level, who she wrote this book for,
                and what the secret is behind her unique change management
                framework.{" "}
                <a href="https://abookapart.com/blogs/press/meet-the-book-surviving-change-at-work-by-vanessa-gennarelli">
                  Read on for more
                </a>
                .
              </p>
            </li>
          </section>
          <aside className="aside2">
            <div className="callout" id="question-callout">
              <h3>Pitch us a book</h3>
              <p>
          <a href="/pages/pitch-us-a-book">Submit your proposal</a>
        </p>
            </div>
            <section className="subsection divider-top">
              <h3>Featured Book</h3>
              <a href="/products/you-deserve-a-tech-union">
  <h4>You Deserve a Tech Union</h4>
      <span class="book-thumb"><img src="//abookapart.com/cdn/shop/files/aba-cover-47_100x@3x.png?v=1686232988" alt="You Deserve a Tech Union" class="book-img"/></span>
  </a>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

export default blog;
