import { Link } from "react-router-dom";



function Homepage() {
  return (
    <>
    <header role="banner">
      <a>
        <picture className="branding__logo">
          <source
            media="(max-width: 559px)"
            srcSet="https://abookapart.com/cdn/shop/t/4/assets/aba-logo-2.svg?v=5628627351356293221537450559"
            type="image/svg+xml" />
          <source
            srcSet="https://abookapart.com/cdn/shop/t/4/assets/aba-logo-2.svg?v=5628627351356293221537450559"
            type="image/svg+xml" />
          <img
            srcSet="https://abookapart.com/cdn/shop/t/4/assets/aba-icon.svg?v=99583976875288395861537450559"
            alt="A Book Apart"
            style={{ width: "400px", height: "200px" }} />
        </picture>
      </a>
      <div className="site-nav">
        <nav className="site-nav__primary">
          <ul className="snv">
            <a href="/products/">Shop</a>
            <Link className="blog" to="/blog">
                Blog
              </Link>
              <Link className="about" to="/about">
                About
              </Link>

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
              <Link className="help" to="/help">
                Help
              </Link>
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
    </header><main id="main">
        <section class="section section--center section--tan site-slogan">
          <div class="contrainer">
            <h2 class="section__title section__tittle-large">
              <svg
                className="section__icon"
                width="54"
                height="52"
                viewBox="0 0 54 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M52.8 4.7c.7 0 1.2.6 1.2 1.2v37.8c0 .7-.5 1.2-1.2 1.2h-14c-2.2 0-7.1.6-7.1 6 0 .6-.5 1.1-1.2 1.1h-7c-.7 0-1.2-.5-1.2-1.2 0-5.3-5-5.9-7-5.9H1.2C.5 45 0 44.4 0 43.7V6c0-.6.5-1.2 1.2-1.2h1.1V41.4c0 .6.6 1.1 1.2 1.1H20c2.7 0 3.5.8 3.5 3.6 0 .6.5 1.2 1.2 1.2h4.6c.7 0 1.2-.6 1.2-1.2 0-2.8.8-3.6 3.5-3.6h16.5c.6 0 1.2-.5 1.2-1.1V4.7h1.1zM34 40.2c-3.5 0-5.4 1.5-5.8 4.7V2C29.8.5 31.9 0 34 0h14.1c.7 0 1.2.5 1.2 1.2v39H34.1zm-14 0H4.7v-39C4.7.5 5.2 0 5.9 0h14c2.2 0 4.3.5 6 2v43h-.1c-.4-3.3-2.3-4.8-5.8-4.8z"></path>
              </svg>
              Brief books for people who design, write,&nbsp;and&nbsp;code
            </h2>
            <div class="section__description section__description--large section__description--narrow">
              <p>
                We shed light on the indusrty's most essential topics in a format
                that's pratical and fun
              </p>
            </div>
          </div>
        </section>
        <section className="section section--flush-bottom medium--section--flush-top">
          <div className="contrainer">
            <a
              href="/products/design-by-definition"
              className="feature feature--bold feature__link"
            >
              <picture className="feature__img" loading="eager">
                <source
                  srcset="//abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_2400x1050_crop_center.progressive.png.jpg?v=1690284124"
                  media="(min-width: 1750px)" />
                <source
                  srcset="//abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_1750x984_crop_center.progressive.png.jpg?v=1690284124"
                  media="(min-width: 1400px)" />
                <img
                  src="//abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_660x.progressive.png.jpg?v=1690284124"
                  srcset="//abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_375x.progressive.png.jpg?v=1690284124 375w, //abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_497x.progressive.png.jpg?v=1690284124 497w, //abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_375x@2x.progressive.png.jpg?v=1690284124 750w, //abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_375x@3x.progressive.png.jpg?v=1690284124 1125w, //abookapart.com/cdn/shop/files/aba-000046-pp-spread-1-crop_660x@2x.progressive.png.jpg?v=1690284124 1320w"
                  sizes="(min-width: 769px) 65vw, 100vw"
                  alt="Design by Definition" />
              </picture>
              <div className="feature__bagde">New Release</div>
              <div className="feature__body">
                <p className="feature__meta">Elizabeth McGuane</p>
                <h2 className="feature__title">Design by Definition</h2>
                <div className="feature__description text">
                  <p>
                    Elizabeth McGuane helps us harness the potency of words and
                    language to uplift and illuminate rather than encumber our
                    design process.
                  </p>
                </div>
                <span className="section__link section__link--bold">
                  Buy This Book
                  <svg
                    viewBox="0 0 16 15"
                    width="16"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.4 7.3V7L7.7 0a.6.6 0 0 0-.8 1l6.3 5.8H1a.6.6 0 0 0 0 1.2h12.2L7 14a.6.6 0 1 0 .8 1l7.5-7a.7.7 0 0 0 .2-.3.6.6 0 0 0 0-.3z"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </section>
        <div className="grid">
          <section className="feature grid__item medium--c 7of12">
            <a
              href="/products/the-business-of-ux-writing"
              className="feature__link"
            >
              <img
                className="feature__img"
                src="//abookapart.com/cdn/shop/files/aba-000043-pp-stack-1_6afbe7a1-9959-462f-a528-f3630d0d63f7_660x.progressive.png.jpg?v=1690283845"
                srcset="//abookapart.com/cdn/shop/files/aba-000043-pp-stack-1_6afbe7a1-9959-462f-a528-f3630d0d63f7_375x.progressive.png.jpg?v=1690283845 375w, //abookapart.com/cdn/shop/files/aba-000043-pp-stack-1_6afbe7a1-9959-462f-a528-f3630d0d63f7_497x.progressive.png.jpg?v=1690283845 497w, //abookapart.com/cdn/shop/files/aba-000043-pp-stack-1_6afbe7a1-9959-462f-a528-f3630d0d63f7_375x@2x.progressive.png.jpg?v=1690283845 750w, //abookapart.com/cdn/shop/files/aba-000043-pp-stack-1_6afbe7a1-9959-462f-a528-f3630d0d63f7_375x@3x.progressive.png.jpg?v=1690283845 1125w, //abookapart.com/cdn/shop/files/aba-000043-pp-stack-1_6afbe7a1-9959-462f-a528-f3630d0d63f7_660x@2x.progressive.png.jpg?v=1690283845 1320w"
                sizes="(min-width: 960px) 660px, (min-width: 769px) 497px, 100vw"
                alt="The Business of UX Writing"
                loading="lazy" />
              <div className="feature__badge">BUNDLE &amp; SAVE</div>
              <div className="feature__body">
                <p className="feature__meta">Yael Ben-David</p>
                <h2 className="feature__title">The Business of UX Writing</h2>
                <div className="feature__description text">
                  <p>
                    Bundle <em>Design by Definition</em> with Yael Ben-David’s{" "}
                    <em>The Business of UX Writing</em>,{" "}
                    <strong>and save 10%! </strong>Gain savvy and practical
                    guidance to ensure your digital products support the user and
                    the business—plus writers and designers!—all at once.
                  </p>
                </div>
                <span class="section__link section__link--bold">
                  Shop This Book{" "}
                  <svg
                    viewBox="0 0 16 15"
                    width="16"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.4 7.3V7L7.7 0a.6.6 0 0 0-.8 1l6.3 5.8H1a.6.6 0 0 0 0 1.2h12.2L7 14a.6.6 0 1 0 .8 1l7.5-7a.7.7 0 0 0 .2-.3.6.6 0 0 0 0-.3z"></path>
                  </svg>
                </span>
              </div>
            </a>
          </section>
          <section className="news grid__item medium--c-5of12">
            <h2 className="section__title section__title--underlined news__heading">
              Latest News
            </h2>
            <a
              className="news__feed"
              href="http://feeds.feedburner.com/a-book-apart"
            >
              RSS Feed{" "}
              <svg
                viewBox="0 0 14 14"
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.2 14C1 14 0 13 0 11.8c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2m7.1 0h-2a.3.3 0 0 1-.3-.3C7 10 4 7 .3 7a.3.3 0 0 1-.3-.3v-2c0-.2.1-.3.3-.3 5.1 0 9.3 4.2 9.3 9.3 0 .2-.1.3-.3.3m4.4 0h-2a.3.3 0 0 1-.3-.3c0-6.1-5-11-11.1-11a.3.3 0 0 1-.3-.4v-2C0 0 .1 0 .3 0 7.9 0 14 6.1 14 13.7c0 .2-.1.3-.3.3"
                  fill="#ED8433"
                ></path>
              </svg>
            </a>
            <ul className="news__list">
              <li className="news__item">
                <h3 className="news__title">
                  <a href="/blogs/press/sneak-a-peek-at-more-new-titles-2023">
                    Sneak a Peek at (More) New Titles!
                  </a>
                </h3>
                <p className="news__date">Aug 03, 2023</p>
                <div className="news__summary text">
                  <p>
                    <img
                      className="press-thumb"
                      src="//cdn.shopify.com/s/files/1/0051/7692/files/aba-logo_small_small.png?219"
                      alt="ABA logo." />
                  </p>
                  <p>
                    Here at HQ we’re in the hot homestretch of summer—and as we
                    soon head into the crisp, fresh air of fall, we couldn’t wait
                    to tell you what’s in store.{" "}
                    <a href="https://abookapart.com/blogs/press/sneak-a-peek-at-more-new-titles-2023">
                      Read on for more
                    </a>
                    .
                  </p>
                </div>
              </li>
              <li className="news__item">
                <h3 className="news__title">
                  <a href="/blogs/press/meet-the-book-surviving-change-at-work-by-vanessa-gennarelli">
                    Meet the Book: Surviving Change at Work by Vanessa Gennarelli
                  </a>
                </h3>
                <p className="news__date">Jul 31, 2023</p>
              </li>
              <li className="news__item">
                <h3 className="news__title">
                  <a href="/blogs/press/new-design-by-definition-elizabeth-mcguane">
                    New! Design by Definition from Elizabeth McGuane
                  </a>
                </h3>
                <p className="news__date">Jul 25, 2023</p>
              </li>
              <li className="news__item">
                <h3 className="news__title">
                  <a href="/blogs/press/preorder-now-you-deserve-a-tech-union-from-ethan-marcotte">
                    Preorder Now: You Deserve a Tech Union from Ethan Marcotte
                  </a>
                </h3>
                <p className="news__date">Jul 19, 2023</p>
              </li>
              <li className="news__item">
                <h3 className="news__title">
                  <a href="/blogs/press/reading-recs-that-make-a-splash">
                    Reading Recs That Make a Splash
                  </a>
                </h3>
                <p className="news__date">Jul 13, 2023</p>
              </li>
            </ul>
            <a
              href="/blogs/press"
              class="section__link section__link--bold news__more"
            >
              View All News{" "}
              <svg
                viewBox="0 0 16 15"
                width="16"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.4 7.3V7L7.7 0a.6.6 0 0 0-.8 1l6.3 5.8H1a.6.6 0 0 0 0 1.2h12.2L7 14a.6.6 0 1 0 .8 1l7.5-7a.7.7 0 0 0 .2-.3.6.6 0 0 0 0-.3z"></path>
              </svg>
            </a>
          </section>
          <section className="section section--close-top section--center section--tan newsletter">
            <div className="contrainer">
              <h2 class="section__title section__title--small">
                The Best Newsletter Around
              </h2>
              <div class="section__description text">
                <p>
                  Stay in the know about new releases, news and interviews, and
                  special offers.
                </p>
              </div>
            </div>
            <div class="newsletter__field-group">
              <label for="newsletter-email2">
                Email<span> Address</span>
              </label>
              <input
                class="email"
                id="newsletter-email2"
                name="fields[email]"
                type="email"
                value="" />
              <button class="btn--rounded" type="submit">
                Subscribe
              </button>
            </div>
          </section>
          <section className="section section--brown section--center">
            <div className="contrainer">
              <h2 class="section__title section__title--large section__title--bright">
                <svg
                  class="section__icon section__icon--dark section__icon--inline section__icon--wide"
                  width="64"
                  height="53"
                  viewBox="0 0 64 53"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M61 23.7L40.8 41v-6.4h.1c.3 0 .5 0 .6-.2L61 17.7v6zm-2.2 9.4L38.6 50.3v-6.4h.1c.3 0 .5 0 .7-.2l1-1 .5.2a1 1 0 0 0 .8-.2l17-14.6v5zm-51.5.8v-5.5l28.7 6 1.2.3a1 1 0 0 0 .8-.2l.6-.4h.3v6.4L7.3 34zM5 43.3v-6.4l31.6 6.6V50L5 43.3zm-1.5-24L35.2 26v6.4L3.6 25.8v-6.4zm33.7 7.1c.2 0 .4 0 .6-.2L57.3 9.6v6L37 32.8v-6.4h.2zM64 23a1 1 0 0 0-.7-.7l-.5-.1v-6l.7-.6a1 1 0 0 0-.4-1.7l-4-.7V8l.8-.6a1 1 0 0 0-.5-1.6L27.5 0a1 1 0 0 0-.7.2L2.1 17.4C1.7 17.7 0 18.8 0 22c0 3.5 2.1 5.1 2.2 5.2h.1l.1.1a.7.7 0 0 0 .1 0l1.6.4c-.3.6-.4 1.4-.4 2.4 0 1.8.5 3 1 4l-1 .7c-.6.3-2.3 1.4-2.2 4.7 0 3.5 2.1 5.1 2.2 5.2l.4.2 33.4 7 1.2.2a1 1 0 0 0 .8-.2l22-18.7a1 1 0 0 0-.4-1.7h-.4v-5.1l3-2.6c.2-.2.4-.6.3-1z"></path>
                </svg>{" "}
                Starter Packs
              </h2>
            </div>
            <div class="section__description section__description--large section__description--white section__description--spaced text">
              <p>
                Curated collections of books on a&nbsp;theme, get you up to
                speed—and save!
              </p>
            </div>
            <ul className="pack-grid grid">
              <a className="grid__item small--c-lof3 medium--c-1of4">
                <a
                  class="pack-grid__item"
                  href="/collections/collaborative-design"
                >
                  <div class="pack-grid__images">
                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-42_48x.png?v=1660142571"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-42_48x.png?v=1660142571 48w, //abookapart.com/cdn/shop/products/aba-cover-42_34x@3x.png?v=1660142571 102w, //abookapart.com/cdn/shop/products/aba-cover-42_48x@3x.png?v=1660142571 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Inclusive Design Communities"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-briefs-cover-10_48x.png?v=1594738234"
                      srcset="//abookapart.com/cdn/shop/products/aba-briefs-cover-10_48x.png?v=1594738234 48w, //abookapart.com/cdn/shop/products/aba-briefs-cover-10_34x@3x.png?v=1594738234 102w, //abookapart.com/cdn/shop/products/aba-briefs-cover-10_48x@3x.png?v=1594738234 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Practical Pair Programming"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-31_48x.png?v=1569338957"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-31_48x.png?v=1569338957 48w, //abookapart.com/cdn/shop/products/aba-cover-31_34x@3x.png?v=1569338957 102w, //abookapart.com/cdn/shop/products/aba-cover-31_48x@3x.png?v=1569338957 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Expressive Design Systems"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-22_48x.png?v=1484930189"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-22_48x.png?v=1484930189 48w, //abookapart.com/cdn/shop/products/aba-cover-22_34x@3x.png?v=1484930189 102w, //abookapart.com/cdn/shop/products/aba-cover-22_48x@3x.png?v=1484930189 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Practical Design Discovery"
                      loading="lazy" />
                  </div>
                  <h3 class="pack-grid__title">
                    <span>Collaborative Design</span>
                  </h3>
                  <div class="pack-grid__text text">
                    <p>Work better, together.</p>
                  </div>
                </a>
              </a>
              <a class="grid__item small--c-1of3 medium--c-1of4">
                <a
                  class="pack-grid__item"
                  href="/collections/compassionate-design"
                >
                  <div class="pack-grid__images">
                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-37_48x.png?v=1627955454"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-37_48x.png?v=1627955454 48w, //abookapart.com/cdn/shop/products/aba-cover-37_34x@3x.png?v=1627955454 102w, //abookapart.com/cdn/shop/products/aba-cover-37_48x@3x.png?v=1627955454 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Design for Safety"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-33_48x.png?v=1593716071"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-33_48x.png?v=1593716071 48w, //abookapart.com/cdn/shop/products/aba-cover-33_34x@3x.png?v=1593716071 102w, //abookapart.com/cdn/shop/products/aba-cover-33_48x@3x.png?v=1593716071 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Design for Cognitive Bias"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-32_48x.png?v=1579299269"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-32_48x.png?v=1579299269 48w, //abookapart.com/cdn/shop/products/aba-cover-32_34x@3x.png?v=1579299269 102w, //abookapart.com/cdn/shop/products/aba-cover-32_48x@3x.png?v=1579299269 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Cross-Cultural Design"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/ABA-cover-18_aea67455-a1b9-486c-a817-fbbbbda3637d_48x.png?v=1554390815"
                      srcset="//abookapart.com/cdn/shop/products/ABA-cover-18_aea67455-a1b9-486c-a817-fbbbbda3637d_48x.png?v=1554390815 48w, //abookapart.com/cdn/shop/products/ABA-cover-18_aea67455-a1b9-486c-a817-fbbbbda3637d_34x@3x.png?v=1554390815 102w, //abookapart.com/cdn/shop/products/ABA-cover-18_aea67455-a1b9-486c-a817-fbbbbda3637d_48x@3x.png?v=1554390815 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Design for Real Life"
                      loading="lazy" />

                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-5-2e_48x.png?v=1591736163"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-5-2e_48x.png?v=1591736163 48w, //abookapart.com/cdn/shop/products/aba-cover-5-2e_34x@3x.png?v=1591736163 102w, //abookapart.com/cdn/shop/products/aba-cover-5-2e_48x@3x.png?v=1591736163 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Designing for Emotion"
                      loading="lazy" />
                  </div>
                  <h3 class="pack-grid__title">
                    <span>Compassionate Design</span>
                  </h3>
                  <div class="pack-grid__text text">
                    <p>Create kinder, more connected design.</p>
                  </div>
                </a>
              </a>
              <a class="grid__item small--c-1of3 medium--c-1of4">
                <a
                  class="pack-grid__item"
                  href="/collections/typography-essentials"
                >
                  <div class="pack-grid__images">
                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-cover-27_48x.png?v=1532470792"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-27_48x.png?v=1532470792 48w, //abookapart.com/cdn/shop/products/aba-cover-27_34x@3x.png?v=1532470792 102w, //abookapart.com/cdn/shop/products/aba-cover-27_48x@3x.png?v=1532470792 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Flexible Typesetting"
                      loading="lazy" />
                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/aba-briefs-cover-7_07fe9ea6-2b1c-4041-a973-3d3e60f28032_48x.png?v=1537209133"
                      srcset="//abookapart.com/cdn/shop/products/aba-briefs-cover-7_07fe9ea6-2b1c-4041-a973-3d3e60f28032_48x.png?v=1537209133 48w, //abookapart.com/cdn/shop/products/aba-briefs-cover-7_07fe9ea6-2b1c-4041-a973-3d3e60f28032_34x@3x.png?v=1537209133 102w, //abookapart.com/cdn/shop/products/aba-briefs-cover-7_07fe9ea6-2b1c-4041-a973-3d3e60f28032_48x@3x.png?v=1537209133 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="Webfont Handbook"
                      loading="lazy" />
                    <img
                      class="pack-grid__image"
                      src="//abookapart.com/cdn/shop/products/ABA-cover-11_db28d356-b628-4c40-9205-a3e8c7988916_48x.png?v=1463456277"
                      srcset="//abookapart.com/cdn/shop/products/ABA-cover-11_db28d356-b628-4c40-9205-a3e8c7988916_48x.png?v=1463456277 48w, //abookapart.com/cdn/shop/products/ABA-cover-11_db28d356-b628-4c40-9205-a3e8c7988916_34x@3x.png?v=1463456277 102w, //abookapart.com/cdn/shop/products/ABA-cover-11_db28d356-b628-4c40-9205-a3e8c7988916_48x@3x.png?v=1463456277 144w"
                      sizes="(min-width: 960px) 42px, (min-width: 769px) 30px, (min-width: 480px) 34px, 48px"
                      alt="On Web Typography"
                      loading="lazy" />
                  </div>
                  <h3 class="pack-grid__title">
                    <span>Typography Essentials</span>
                  </h3>
                  <div class="pack-grid__text text">
                    <p>Design readable, great-looking words.</p>
                  </div>
                </a>
              </a>
              <a class="grid__item medium--c-1of6 medium--push">
                <a class="more more--light" href="/products/#packs">
                  <span>
                    View all Packs{" "}
                    <svg
                      viewBox="0 0 16 15"
                      width="16"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.4 7.3V7L7.7 0a.6.6 0 0 0-.8 1l6.3 5.8H1a.6.6 0 0 0 0 1.2h12.2L7 14a.6.6 0 1 0 .8 1l7.5-7a.7.7 0 0 0 .2-.3.6.6 0 0 0 0-.3z"></path>
                    </svg>
                  </span>
                </a>
              </a>
            </ul>
          </section>
          <div className="hero">
            <img className="p" src="gambar.webp" alt="" />
            <div
              className="gabungan"
              style={{
                display: "flex",
                flexDirection: "column",
                zIndex: "1",
                position: "absolute",
              }}
            ></div>
            <h2 class="hero__title section__title section__title--white">
              A Book Apart Gear
            </h2>
            <div class="teks-gambar">
              <p>
                Mugs, shirts, and totes, oh my! Outfit yourself and support your
                favorite indie book publisher.
              </p>
            </div>

            <a class="btn btn--bold" href="/collections/gear">
              Shop Now
            </a>
          </div>
          <section className="kumpulan">
            <div class="container">
              <h2 class="section__title section__title--underlined">
                Recent Releases
              </h2>

              <ul class="book-grid grid">
                <li class="grid__item c-1of2 small--c-1of3 medium--c-1of6">
                  <a
                    class="book-grid__item"
                    href="/products/surviving-change-at-work"
                  >
                    <img
                      src="//abookapart.com/cdn/shop/files/aba-cover-48_212x.png?v=1686233060"
                      srcset="//abookapart.com/cdn/shop/files/aba-cover-48_112x.png?v=1686233060 112w, //abookapart.com/cdn/shop/files/aba-cover-48_212x.png?v=1686233060 212w, //abookapart.com/cdn/shop/files/aba-cover-48_112x@3x.png?v=1686233060 336w, //abookapart.com/cdn/shop/files/aba-cover-48_160x@3x.png?v=1686233060 480w, //abookapart.com/cdn/shop/files/aba-cover-48_212x@3x.png?v=1686233060 636w"
                      sizes="(min-width: 960px) 160px, (min-width: 769px) 112px, (min-width: 480px) 212px, 202px"
                      alt="Surviving Change at Work"
                      class="book-grid__img"
                      loading="lazy" />
                    <p class="book-grid__byline">Vanessa Gennarelli</p>
                    <h3 class="book-grid__title">Surviving Change at Work</h3>
                  </a>
                </li>

                <li class="grid__item c-1of2 small--c-1of3 medium--c-1of6">
                  <a
                    class="book-grid__item"
                    href="/products/you-deserve-a-tech-union"
                  >
                    <img
                      src="//abookapart.com/cdn/shop/files/aba-cover-47_212x.png?v=1686232988"
                      srcset="//abookapart.com/cdn/shop/files/aba-cover-47_112x.png?v=1686232988 112w, //abookapart.com/cdn/shop/files/aba-cover-47_212x.png?v=1686232988 212w, //abookapart.com/cdn/shop/files/aba-cover-47_112x@3x.png?v=1686232988 336w, //abookapart.com/cdn/shop/files/aba-cover-47_160x@3x.png?v=1686232988 480w, //abookapart.com/cdn/shop/files/aba-cover-47_212x@3x.png?v=1686232988 636w"
                      sizes="(min-width: 960px) 160px, (min-width: 769px) 112px, (min-width: 480px) 212px, 202px"
                      alt="You Deserve a Tech Union"
                      class="book-grid__img"
                      loading="lazy" />
                    <p class="book-grid__byline">Ethan Marcotte</p>
                    <h3 class="book-grid__title">You Deserve a Tech Union</h3>
                  </a>
                </li>

                <li class="grid__item c-1of2 small--c-1of3 medium--c-1of6">
                  <a
                    class="book-grid__item"
                    href="/products/design-by-definition"
                  >
                    <img
                      src="//abookapart.com/cdn/shop/files/aba-cover-46_212x.png?v=1686232747"
                      srcset="//abookapart.com/cdn/shop/files/aba-cover-46_112x.png?v=1686232747 112w, //abookapart.com/cdn/shop/files/aba-cover-46_212x.png?v=1686232747 212w, //abookapart.com/cdn/shop/files/aba-cover-46_112x@3x.png?v=1686232747 336w, //abookapart.com/cdn/shop/files/aba-cover-46_160x@3x.png?v=1686232747 480w, //abookapart.com/cdn/shop/files/aba-cover-46_212x@3x.png?v=1686232747 636w"
                      sizes="(min-width: 960px) 160px, (min-width: 769px) 112px, (min-width: 480px) 212px, 202px"
                      alt="Design by Definition"
                      class="book-grid__img"
                      loading="lazy" />
                    <p class="book-grid__byline">Elizabeth McGuane</p>
                    <h3 class="book-grid__title">Design by Definition</h3>
                  </a>
                </li>

                <li class="grid__item c-1of2 small--c-1of3 medium--c-1of6">
                  <a
                    class="book-grid__item"
                    href="/products/wireframing-for-everyone"
                  >
                    <img
                      src="//abookapart.com/cdn/shop/products/aba-cover-45_212x.png?v=1682110275"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-45_112x.png?v=1682110275 112w, //abookapart.com/cdn/shop/products/aba-cover-45_212x.png?v=1682110275 212w, //abookapart.com/cdn/shop/products/aba-cover-45_112x@3x.png?v=1682110275 336w, //abookapart.com/cdn/shop/products/aba-cover-45_160x@3x.png?v=1682110275 480w, //abookapart.com/cdn/shop/products/aba-cover-45_212x@3x.png?v=1682110275 636w"
                      sizes="(min-width: 960px) 160px, (min-width: 769px) 112px, (min-width: 480px) 212px, 202px"
                      alt="Wireframing for Everyone"
                      class="book-grid__img"
                      loading="lazy" />
                    <p class="book-grid__byline">
                      Michael Angeles, Leon Barnard, &amp; Billy Carlson
                    </p>
                    <h3 class="book-grid__title">Wireframing for Everyone</h3>
                  </a>
                </li>

                <li class="grid__item c-1of2 small--c-1of3 medium--c-1of6">
                  <a
                    class="book-grid__item"
                    href="/products/immersive-content-and-usability"
                  >
                    <img
                      src="//abookapart.com/cdn/shop/products/aba-cover-44_212x.png?v=1677444687"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-44_112x.png?v=1677444687 112w, //abookapart.com/cdn/shop/products/aba-cover-44_212x.png?v=1677444687 212w, //abookapart.com/cdn/shop/products/aba-cover-44_112x@3x.png?v=1677444687 336w, //abookapart.com/cdn/shop/products/aba-cover-44_160x@3x.png?v=1677444687 480w, //abookapart.com/cdn/shop/products/aba-cover-44_212x@3x.png?v=1677444687 636w"
                      sizes="(min-width: 960px) 160px, (min-width: 769px) 112px, (min-width: 480px) 212px, 202px"
                      alt="Immersive Content and Usability"
                      class="book-grid__img"
                      loading="lazy" />
                    <p class="book-grid__byline">Preston So</p>
                    <h3 class="book-grid__title">
                      Immersive Content and Usability
                    </h3>
                  </a>
                </li>

                <li class="grid__item c-1of2 small--c-1of3 medium--c-1of6 medium--is-hidden">
                  <a
                    class="book-grid__item"
                    href="/products/the-business-of-ux-writing"
                  >
                    <img
                      src="//abookapart.com/cdn/shop/products/aba-cover-43_212x.png?v=1666635531"
                      srcset="//abookapart.com/cdn/shop/products/aba-cover-43_112x.png?v=1666635531 112w, //abookapart.com/cdn/shop/products/aba-cover-43_212x.png?v=1666635531 212w, //abookapart.com/cdn/shop/products/aba-cover-43_112x@3x.png?v=1666635531 336w, //abookapart.com/cdn/shop/products/aba-cover-43_160x@3x.png?v=1666635531 480w, //abookapart.com/cdn/shop/products/aba-cover-43_212x@3x.png?v=1666635531 636w"
                      sizes="(min-width: 960px) 160px, (min-width: 769px) 112px, (min-width: 480px) 212px, 202px"
                      alt="The Business of UX Writing"
                      class="book-grid__img"
                      loading="lazy" />
                    <p class="book-grid__byline">Yael Ben-David</p>
                    <h3 class="book-grid__title">The Business of UX Writing</h3>
                  </a>
                </li>

                <li class="grid__item medium--c-1of6">
                  <a class="more" href="/products/#books">
                    <span>
                      View all Books{" "}
                      <svg
                        viewBox="0 0 16 15"
                        width="16"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.4 7.3V7L7.7 0a.6.6 0 0 0-.8 1l6.3 5.8H1a.6.6 0 0 0 0 1.2h12.2L7 14a.6.6 0 1 0 .8 1l7.5-7a.7.7 0 0 0 .2-.3.6.6 0 0 0 0-.3z"></path>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <footer role="contentinfo">
            <div className="section section--close-top section--tan">
              <div className="contrainer">
                <div className="site-footer grid">
                  <div className="grid__item medium--c-5of12">
                    <h3 className="site-footer__title"></h3>
                    <div class="grid__item small--c-1of3 medium--c-3of12">
                      <h3 class="site-footer__title">Follow Us</h3>
                      <ul class="site-footer__nav site-footer__nav--social">
                        <li class="site-footer__item--icons">
                          <a href="http://twitter.com/abookapart">
                            <svg
                              viewBox="0 0 15 12"
                              width="15"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Twitter</title>
                              <path d="M15 1.42a6.32 6.32 0 0 1-1.53 1.57v.4c0 4-3.09 8.61-8.75 8.61A8.77 8.77 0 0 1 0 10.77c.24.03.49.05.73.05 1.44 0 2.78-.61 3.82-1.44a3.06 3.06 0 0 1-2.87-2.1 3.25 3.25 0 0 0 1.4-.05A3.04 3.04 0 0 1 .6 4.26v-.04c.41.22.88.36 1.39.38A3 3 0 0 1 .62 2.09c0-.57.16-1.03.42-1.47a8.8 8.8 0 0 0 6.34 3.1 3.04 3.04 0 0 1 3-3.73c.89.01 1.69.39 2.26.97.7-.14 1.35-.4 1.94-.74-.22.7-.7 1.3-1.35 1.68A6.16 6.16 0 0 0 15 1.42z"></path>
                            </svg>
                            @abookapart on Twitter
                          </a>
                        </li>
                        <li class="site-footer__item--icons">
                          <a href="http://instagram.com/abookapart">
                            <svg
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Instagram</title>
                              <path d="M8 0c2.17 0 2.45.01 3.3.05.85.04 1.43.17 1.94.37.53.2.97.48 1.42.92.44.45.72.9.92 1.42.2.5.33 1.09.37 1.94.04.85.05 1.13.05 3.3s-.01 2.45-.05 3.3a5.87 5.87 0 0 1-.37 1.94c-.2.53-.48.97-.92 1.42-.45.44-.9.72-1.42.92-.5.2-1.09.33-1.94.37-.85.04-1.13.05-3.3.05a56.3 56.3 0 0 1-3.3-.05 5.85 5.85 0 0 1-1.94-.37c-.53-.2-.97-.48-1.42-.92a3.9 3.9 0 0 1-.92-1.42c-.2-.5-.33-1.09-.37-1.94C0 10.45 0 10.17 0 8s.01-2.45.05-3.3c.04-.85.17-1.43.37-1.94.2-.53.48-.97.92-1.42.45-.44.9-.72 1.42-.92.5-.2 1.09-.33 1.94-.37C5.55 0 5.83 0 8 0m5.23 3.73a.96.96 0 1 0-1.92 0 .96.96 0 0 0 1.92 0M8 3.89a4.1 4.1 0 1 0 0 8.22 4.1 4.1 0 0 0 0-8.22m0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34"></path>
                            </svg>
                            @abookapart on Instagram
                          </a>
                        </li>
                        <li class="site-footer__item--icons">
                          <a href="http://feeds.feedburner.com/a-book-apart">
                            <svg
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>RSS</title>
                              <path d="M16 12.6c0 1.9-1.5 3.4-3.4 3.4H3.4A3.4 3.4 0 0 1 0 12.6V3.4C0 1.5 1.5 0 3.4 0h9.2C14.5 0 16 1.5 16 3.4v9.2zM4.3 13a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zm-1.5-5a5 5 0 0 1 5 5H10a7 7 0 0 0-7-7v2zm0-3.7c4.8 0 8.7 4 8.7 8.7h2c0-5.9-4.8-10.7-10.7-10.7v2z"></path>
                            </svg>
                            A Book Apart News RSS
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="grid__item small--c-1of3 medium--c-2of12">
                      <h3 class="site-footer__title">Shop</h3>
                      <ul class="site-footer__nav">
                        <li>
                          <a href="/collections/books" title="Books">
                            Books
                          </a>
                        </li>
                        <li>
                          <a href="/collections" title="Privacy Policy">
                            Starter Packs
                          </a>
                        </li>

                        <li>
                          <a href="/collections/gear" title="Gear">
                            Gear
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="grid__item small--c-1of3 medium--c-2of12">
                      <h3 class="site-footer__title">Company</h3>
                      <ul class="site-footer__nav">
                        <li>
                          <a href="/pages/help/" title="Help &amp; Contact Us">
                            Help &amp; Contact
                          </a>
                        </li>
                        <li>
                          <a href="/pages/about/" title="About Us">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pages/pitch-us-a-book/"
                            title="Pitch Us a Book"
                          >
                            Pitch Us a Book
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pages/resources-for-authoring/"
                            title="Resources for Authoring"
                          >
                            Resources for Authoring
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pages/join-our-editorial-team/"
                            title="Join Our Editorial Team"
                          >
                            Join Our Editorial Team
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main></>
  );
}
  

export default Homepage;
