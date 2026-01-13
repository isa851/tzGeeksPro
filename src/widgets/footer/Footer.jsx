import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_footerContainer">
        <div className="footer_footerContent_about">
          <h1 className="footer_footerContent_about_title">О магазине</h1>
          <p className="footer_footerContent_about_text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.
          </p>
        </div>

        <div className="footer_footerContent_categories">
          <h1 className="footer_footerContent_categories_title">Категории</h1>
          <div className="footer_footerContent_categories_list">
            <button className="footer_footerContent_categories_btn">часы</button>
            <button className="footer_footerContent_categories_btn">браслеты</button>
            <button className="footer_footerContent_categories_btn">ремни</button>
            <button className="footer_footerContent_categories_btn">ювелирные изделия</button>
            <button className="footer_footerContent_categories_btn">запонки</button>
          </div>
        </div>

        <div className="footer_footerContent_newsletter">
          <h1 className="footer_footerContent_newsletter_title">Рассылка</h1>
          <p className="footer_footerContent_newsletter_text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
          </p>
        </div>
      </div>
    </footer>
  );
}