function about() {
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
      <main id="main3">
        <div className="content content-with-sidebar2">
          <h2 className="title3">About A Book Apart</h2>
          <div id="about">
            <section className="about-text">
              <p>
                A Book Apart publishes detailed, meticulously edited
                examinations of single topics. Our books come in two formats:
                Standards (100–150 pages, available in paperback and ebook) and
                Briefs (50–70 pages, available in ebook and print-on-demand).
                Both are the perfect size for topics ranging from technical to
                theory: responsive web design, Git, and JavaScript to content
                strategy, design principles, management, and more.
              </p>
              <p>
                The goal of every title in our catalog is to shed light on an
                essential topic in a format that’s practical and fun — because
                enjoying what you read makes learning easier. Thanks for
                supporting our mission to help you move the web forward.
              </p>
            </section>
            <section className="about-main-people">
              <ul className="about-people">
                <ul>
                  <li>
                    <div className="about-person-info">
                      <a href="https://twitter.com/biladew">
                        <img
                          className="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-ron-bilodeau.jpg?v=177726050635557474131537450584"
                        />
                      </a>
                      <a
                        className="about-person-name"
                        href="https://twitter.com/biladew"
                      >
                        Ron Bilodeau
                      </a>
                      <span className="about-person-title">Book producer</span>
                    </div>
                  </li>
                  <li>
                    <div className="about-person-info">
                      <a href="https://twitter.com/sbh_writer">
                        <img
                          className="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-susan-bond.jpg?v=42109179908376670101660075559"
                        />
                      </a>
                      <a
                        className="about-person-name"
                        href="https://twitter.com/sbh_writer"
                      >
                        Susan Bond
                      </a>
                      <span className="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div className="about-person-info">
                      <a href="https://www.mauricecherry.com/about">
                        <img
                          className="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-maurice-cherry.jpg?v=103801797614404370631667245278"
                        />
                      </a>
                      <a
                        className="about-person-name"
                        href="https://www.mauricecherry.com/about"
                      >
                        Maurice Cherry
                      </a>
                      <span className="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://www.instagram.com/brittanyhclark/">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-brittany-clark.jpg?v=83055635765926305601572348422"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://www.instagram.com/brittanyhclark/"
                      >
                        Brittany Clark
                      </a>
                      <span class="about-person-title">
                        Marketing specialist &amp; lead customer advocate
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="http://guerillalabs.co/">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-jacob-fentress.jpg?v=41936262874715229751537450581"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="http://guerillalabs.co/"
                      >
                        Jacob Fentress
                      </a>
                      <span class="about-person-title">Web developer</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="http://twitter.com/theledu">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-katel-ledu.jpg?v=55720620898249872171641318367"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="http://twitter.com/theledu"
                      >
                        Katel LeDû
                      </a>
                      <span class="about-person-title">CEO</span>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="about-person-info">
                      <a href="http://twitter.com/candicodeit">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-candi-ligutan.jpg?v=159682006543858946371537450580"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="http://twitter.com/candicodeit"
                      >
                        Candi Lemoine
                      </a>
                      <span class="about-person-title">
                        Project manager &amp; customer advocate
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://twitter.com/litherland">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-caren-litherland.jpg?v=17124021705114977851596639685"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://twitter.com/litherland"
                      >
                        Caren Litherland
                      </a>
                      <span class="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://twitter.com/redsesame">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-lisa-maria-martin.jpg?v=41991682419741616691555419356"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://twitter.com/redsesame"
                      >
                        Lisa Maria Marquis
                      </a>
                      <span class="about-person-title">Editor in chief</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://twitter.com/wilto">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/author-mat-marquis.jpg?v=174612618327590433661537450565"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://twitter.com/wilto"
                      >
                        Mat Marquis
                      </a>
                      <span class="about-person-title">
                        Technical editor &amp; developer
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="http://www.gregnicholl.com/">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-greg-nicholl.jpg?v=73146078638365467381667245237"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="http://www.gregnicholl.com/"
                      >
                        Greg Nicholl
                      </a>
                      <span class="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://www.kumaricreates.com/">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-kumari-pacheco.jpg?v=173509495223162386631667245284"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://www.kumaricreates.com/"
                      >
                        Kumari Pacheco
                      </a>
                      <span class="about-person-title">Editor</span>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="about-person-info">
                      <a href="http://jasonsantamaria.com">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-jason-santa-maria.jpg?v=73479078501908410531537450582"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="http://jasonsantamaria.com"
                      >
                        Jason Santa Maria
                      </a>
                      <span class="about-person-title">
                        Creative director &amp; cofounder
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://twitter.com/danielleabeda">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-danielle-small.jpg?v=160972186065391882921596639692"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://twitter.com/danielleabeda"
                      >
                        Danielle Small
                      </a>
                      <span class="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://twitter.com/adaobi76">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-adaobi-obi-tulton.jpg?v=46800467549056106231639684810"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://twitter.com/adaobi76"
                      >
                        Adaobi Obi Tulton
                      </a>
                      <span class="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://www.wunderinkediting.com/">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-sharina-wunderink.jpg?v=69964078070420177641660075606"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://www.wunderinkediting.com/"
                      >
                        Sharina Wunderink
                      </a>
                      <span class="about-person-title">Editor</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="https://twitter.com/lesliezaikis">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-leslie-zaikis.jpg?v=173775186855388242581596639700"
                        />
                      </a>
                      <a
                        class="about-person-name"
                        href="https://twitter.com/lesliezaikis"
                      >
                        Leslie Zaikis
                      </a>
                      <span class="about-person-title">Marketing lead</span>
                    </div>
                  </li>
                  <li>
                    <div class="about-person-info">
                      <a href="http://zeldman.com">
                        <img
                          class="about-person-avatar"
                          src="//abookapart.com/cdn/shop/t/4/assets/staff-jeffrey-zeldman.gif?v=121455763352207826671537450583"
                        />
                      </a>
                      <a class="about-person-name" href="http://zeldman.com">
                        Jeffrey Zeldman
                      </a>
                      <span class="about-person-title">
                        Publisher &amp; cofounder
                      </span>
                    </div>
                  </li>
                </ul>
              </ul>
            </section>
      
          </div>
        </div>
      </main>
    </>
  );
}

export default about;
