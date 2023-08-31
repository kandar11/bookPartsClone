function Help() {
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
        <main id="main2">
          <div className="content content-with-sidebar"> 
              <h2 className="title2">HELP & FAQS</h2>
              <section id="help">
                <h3>Need Help?</h3>
                <p className="icon-mail">
                  "React us at"
                 <a href="mailto:support@abookapart.com">support@abookapart.com</a>
                 ", or review the frequently asked questions below."
                </p>
              </section>
              <section className="subsection divider-top" id="faqs2">
                <h3>Frequently Asked Question</h3>
                <h4 id="where_my_book">Where my book?</h4>
                <p>Orders ship within 24 hours of being placed. Shipping time in the US is usually less than a week; in the UK and Canada, shipping time is generally 7-10 business days. Elsewhere in Europe, shipping time can be 3-4 weeks. To all other locations, please allow 4-6 weeks for your book to arrive.</p>
                <h4 id="how_can_i_read_the_book">How can I read the book</h4>
                <p>When you buy an ebook, you will receive two DRM-free file formats: EPUB and PDF. Learn how to read our ebooks using several common setups on the <a href="/pages/ebook-instructions">instructions page</a> (A link to these instructions is included in each ebook download email).</p>
                <h4 id="what_are_briefs">What are Briesfs?</h4>
                <p>Briefs are short guides to essential fundamentals, of-the-moment techniques, or deep nerdery on a single aspect of a topic. Paperback Briefs ship separately from Standard paperbacks and will arrive in a different package or packages and may have different transit times. If you have any questions or issues with Briefs paperbacks, please let us know! <a href="https://abookapart.com/blogs/press/99521671-introducing-briefs">Learn more about this series</a>.</p>
                <h4 id="do_you_accept_book_proposal_submissions">Do you accept book proposal submissions?</h4>
                <p>Yes! Please read our <a href="https://abookapart.com/pages/pitch-us-a-book/">Pitch Us A Book page</a> to learn about our submissions process and send us your pitch.</p>
                <h4 id="where_do_you_ship_to">Where do you ship to?</h4>
                <p>We ship books worldwide</p>
                <h4 id="what_do_you_charge_for_shipping">What do you charge for shipping?</h4>
                <p>Shipping is calculated during checkout after you enter your shipping address; you will be able to review the shipping charges before placing your order. In the US, typically, you may choose between standard and expedited shipping.</p>
                <p>Note that we charge for shipping in line with our costs, and work to keep those costs as low as we can. International shipping prices are higher than we would like them to be, and we are always exploring options to reduce these costs.</p>
                <h4 id="how_do_you_handle_international_customs">How do you handle international customs, taxes, or duties?</h4>
                <p>We attach the appropriate customs forms to every international shipment and clearly label the contents as “books;” many countries do not levy customs taxes on the importation of books, so in most cases, no customs fees will be applied. That said, any import taxes and fees charged by the destination country are your responsibility. Customs policies vary widely from country to country so if you have any concerns before you order, we recommend that you contact your local customs office. <em>*We now offer guaranteed international shipping that includes duties and taxes. If you choose this option, your order will be delivered without incident.</em></p>
                <h4 id="oops_i_gave_you_the_wrong_shipping_address">Oops! I gave you the wrong shipping address.</h4>
                <p>Ok; <a href="mailto:support@abookapart.com">let us know your order number and the correct address</a>, and we’ll do our best to get it fixed up for you. Orders ship out very quickly, so there’s no guarantee we’ll be able to make corrections to an order before it ships.</p>
                <h4 id="i_have_a_shipping_address_with_non-latin_characters">I have a shipping address with non-Latin characters. Can you ship to it?</h4>
                <p>Unfortunately, we can only accept addresses using the Latin alphabet due to the rules of our shipping partners. All non-Latin character addresses will result in the order being non-deliverable.</p>
                <h4 id="i_have_a_gift_card_how_do_i_redeem_it">I have a gift card. How do I redeem it?</h4>
                <p>When you checkout, you can apply your gift card code after you enter your shipping and billing information (but before you confirm your order). There’s a specific field just for gift cards!</p>
                <h4 id="i_bought_a_gift_card_for_someone_else_how_do_i_share_it">I bought a gift card for someone else. How do I share it?</h4>
                <p>When you purchase a gift card, you’ll get an email with instructions on how to view, share, and print it. To share a gift card, simply forward that email to the recipient, or share the gift card link (also included in the email) directly.</p>
                <h4 id="i_ordered_the_ebook_when_will_i_get_it">I ordered the ebook. When will I get it?</h4>
                <p>Shortly after your order for the ebook goes through, you’ll receive an email with a link to download your book. Check your spam folder if you don’t see it right away.</p>
                <h4 id="can_i_create_a_customer_account">Can I create a customer account?</h4>
                <p>If you’d like to create a new account, click on <strong>Sign In</strong> in the upper right of this page (or any other page of this site). Then, click on the <strong>Create account</strong> link under the sign-in fields. If you already have an account, click on <strong>Sign In</strong> to access it.</p>
                <p>Please note: unfortunately, there’s currently no way to merge multiple email addresses into a single account. So, if you’ve used more than one email address to purchase books from us, you’ll have to create an account for each address to see corresponding order details. We’re sorry for any inconvenience this may cause.</p>
                <h4 id="access_account_for_past_orders">I previously purchased books, but I can’t log in. How can I access my account?</h4>
                <p>Accounts aren’t automatically set up with the purchase of books. If you’ve used an email address to place an order with us, you can check to see if you have an account by going through the password recovery process. Go to <a href="https://abookapart.com/account/login#recover">abookapart.com/account/login#recover</a> and enter your email address to reset your password. If no account can be found, create an account with the email address you used to complete your previous purchases. Once your account is set up, you’ll be able to access all purchased downloads and review order history.</p>
                <h4 id="my_cat_ate_my_ebook_files_can_i_download_the_ebook_again">My cat ate my ebook files. Can I download the ebook again?</h4>
                <p>Absolutely. If you have an account, sign in to access all your ebook orders and downloads in one place. If you don’t have an account yet, you can create one <a href="https://abookapart.com/account/login">here</a>.</p>
                <h4 id="i_have_a_coupon_code_where_do_i_put_it">I have a discount code. Where do I put it?</h4>
                <p>Add a book or books to your cart (you’ll do this even if you have a code for free books). If you’re purchasing multiple books, you’ll have a chance to enter the code in the field marked “Discount Code” while reviewing your shopping cart. If you’re buying just one book, you can enter the code in the field marked ”Gift card or discount code” during checkout.</p>
                <h4 id="do_you_offer_a_discount_if_i_want_to_buy_a_lot_of_books">Do you offer a discount if I want to buy a lot of books?</h4>
                <p>We now offer discounts for purchasing any two (or more) books in any combination of paperback and/or ebook formats. Discounts are applied automatically to the following quantities, in the online shopping cart at checkout: two or more = 10% off, four or more = 15% off, ten or more = 20% off.</p>
                <h4 id="what_is_your_return_policy">What is your return policy?</h4>
                <p>Neither paperbacks nor ebooks are returnable.</p>
                <h4 id="do_you_sell_to_bookstores">Do you sell to bookstores?</h4>
                <p>We sell to bookstores on a nonreturnable basis, at a 20% discount off the retail price. The 20% discount applies to orders of 10 books or more (<a href="#do_you_offer_a_discount_if_i_want_to_buy_a_lot_of_books">see bulk discount rates info</a>). All bookstore orders can be placed directly through our <a href="https://abookapart.com/products/">online store</a>; we do not process phone orders or purchase orders. For more details, <a href="mailto:support@abookapart.com?Subject=Bulk Discounts">please contact us</a>.</p>
                <h4 id="can_i_get_a_discount_for_my_class_or_book_club">Can I get a discount for my class or book club?</h4>
                <p>If you are assigning one of our books to your class or book club, we will be happy to provide a discount for your group. Coupon codes will work for a set amount of time and/or maximum number of orders. Please <a href="mailto:support@abookapart.com?Subject=Student or Book Club Discounts">contact us</a> with the details of your group and we’ll be happy to oblige.</p>
                <h4 id="how_can_i_help_spread_the_word_about_your_books">How can I help spread the word about your books?</h4>
                <p>For review copies, please <a href="mailto:friends@abookapart.com">contact us</a>  with details of the title you wish to preview, publication in which the review will appear, and your full contact information.</p>
              </section>
          </div>
          <aside>
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
        </main>
        </>
    );
  }

  export default Help;