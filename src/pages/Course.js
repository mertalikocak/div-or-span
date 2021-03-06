import React from "react";
import { Link, useParams } from "react-router-dom";

function Overview() {
  const { course } = useParams();
  {
    /* Linkten parametre alma fonksiyonu */
  }

  const py = `<h3>Öğrenecekleriniz</h3>
  <ul>
  <li>
    Python'ın ve Programlamanın Temellerini iyi bir şekilde öğrenmiş
    olacaksınız.
  </li>
  <li>
    Python ile Örümcek Türü yazılımlar geliştirebilecek hale geleceksiniz.
  </li>
  <li>
    Kurs boyunca oldukça fazla program yazacağımız için, kurstan sonra
    algoritma yeteneğinizin bir hayli geliştiğini farkedeceksiniz.
  </li>
</ul>
<br/>
<h3>Dersler</h3>
<ol>
  <li>
    Python Nedir?
  </li>
  <li>
  Python Kurulumu
  </li>
  <li>
 Python Yorum
  </li>
  <li>
 Python Değişkenler
  </li>
  <li>
  Python İşlemler
  </li>
</ol>
<br/>
<h3>Gereksinimler</h3>
<ul><li>Öğrencilerin başlangıç seviyesinde bilgisayar kullanmayı bilmeleri ve öğrenme disiplinine sahip olmaları yeterlidir.</li>
<li>Öğrencilerin, herhangi bir programlama bilgisine ihtiyacı yoktur.</li></ul>
</div>
<br>
<h3>Bu kurs kimler için uygun:</h3>
<ul><li>Programlamayla daha önce tanışmamış olup, sıfırdan programlama öğrenmek isteyenler</li>
<li>Başka bir dilde programlama tecrübesi olup Python öğrenmek isteyenler</li>
<li>Python'ı temel seviyeden bilip, ileri seviye Python öğrenmek isteyenler</li></ul>`;
  const cs = `<h3>Öğrenecekleriniz</h3>
  <ul>
  <li>
      C# ile gelişmiş masaüstü yazılım uygulamaları geliştirebileceksiniz
  </li>
  <li>
      Temel seviyeden başlayarak orta ve ileri seviyeye kadar C# programlama dilini öğrenmiş olacaksınız
  </li>
  <li>
      Ezber değil, anlayarak yazılım geliştirebileceksiniz
  </li>
</ul>
<br/>
<h3>Dersler</h3>

<ol>
  <li>
    C# Nedir
  </li>
  <li>
    C# Ekrana Yazdırma
  </li>
  <li>
    C# Ekranda Durdurma
  </li>
  <li>
    C# Merhaba Dünya
  </li>
</ol>
<br/>
<h3>Gereksinimler</h3>
<ul><li>Başlangıç seviyesinde bilgisayar kullanıyor olmalısınız!</li>
<li>ÖBu kurs için herhangi bir programlama dili bilgisine sahip olmak zorunda değilsiniz!</li></ul>
<br>
<h3>Bu kurs kimler için uygun:</h3>
<ul><li>Yazılım uzmanı olmak isteyen herkes</li>
<li>C# programlama dilini öğrenmek ve uzmanlaşmak isteyen herkes</li>
<li>Masaüstü, Web, Mobil uygulama geliştirmek ve bunları tek bir programlama diliyle yapabilmek isteyen herkes</li></ul>`;
  const js = `<h3>Öğrenecekleriniz</h3>
  <ul>
  <li>
      Javascript dilini etkin bir şekilde kullanabileceksiniz.
  </li>
  <li>
      Javascript'de Asenkron İşlemlerin yürütülmesini sağlayan Callback, ES6 Promise ve ES7 Async Await yapısını detaylı bir şekilde öğreneceksiniz.
  </li>
  <li>
      Ezber değil, anlayarak yazılım geliştirebileceksiniz
  </li>
</ul>
<br/>
<h3>Dersler</h3>
<ol>
  <li>
    JavaScript Nedir?
  </li>
  <li>
    JS Nasıl Kullanılır?
  </li>
  <li>
    JS Yazım Kuralları
  </li>
  <li>
    JavaScript Yorum
  </li>
</ol>
<br/>
<h3>Gereksinimler</h3>
<ul><li>Temel html ve css bilgisine sahip olmanız yeterlidir.</li>
<li>Herhangi bir programlama bilgisine sahip olmanız gerekmemektedir.</li></ul>
<br>
<h3>Bu kurs kimler için uygun:</h3>
<ul><li>Frontend uzmanı olmak isteyen herkes</li>
<li>Javascipt ve Javascript türevlerine (NodeJs, Angular, React, VueJs) ilgi duyan herkes katılabilir.</li></ul>`;

  // Sayfaların içeriklerini değişkenlere atadık

  let now = "";

  // O anki içeriği bu değişken tutacak

  let imglink = "";

  //  kursun resim yolunu bu değişken tutacak

  let first_lesson = "";

  // kursa yönlendirme amaçlı ilk dersi tutacak

  if (course === "py") {
    // linke göre  içeriklerin ataması yapılıyor

    now = py;
    imglink = require("../img/py_lesson.png");
    first_lesson = "/course/py/1";
  } else if (course === "cs") {
    now = cs;
    imglink = require("../img/cs_lesson.jpg");
    first_lesson = "/course/cs/1";
  } else if (course === "js") {
    now = js;
    imglink = require("../img/js_lesson.jpg");
    first_lesson = "/course/js/1";
  } else {
    window.location.href = "/404";
  }

  return (
    <div class="languageContainer">
      <div class="left_grid"></div>
      <div class="right_grid"></div>
      <div class="main_grid_lesson">
        <div class="lesson_image">
          <img /* img link resmin yolunu veriyor */
            src={imglink}
            alt="course_image"
            width="90%"
            className="lesson_png"
          />
        </div>
        <div class="lesson_text">
          <div
            class="col-lg-10"
            dangerouslySetInnerHTML={{
              __html: now,
            }} /* html olarak kodları içeriye setliyoruz */
          ></div>

          <div class="col-lg-10">
            <Link to={first_lesson} className="ilk_derslink">
              {/* first lesson ilk dersin yolunu tutuyor. */}
              <button type="button" class="btn btn-primary btn-lg ilk_ders ">
                Derse Başla
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Overview;
