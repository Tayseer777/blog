import favicon from './extensions/download.png';

export default {
  config: {
    locales: ['ar'],
    head: {
      favicon: favicon,
    },
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          buttonPrimary600: '#2F4B61',
          primary600: '#2F4B61',
        },
      },
    },
  translations: {
    en:{"Auth.form.welcome.title": "WELCOME!",
    "Auth.form.welcome.subtitle": "Log in to your account",
        },
    ar: {
      "Auth.form.welcome.subtitle": "سجل دخولك الآن",
      "Password": "كلمة السر",
      "global.password": "كلمة السر",
      "Auth.form.welcome.title": "WELCOME!",
      "app.components.LeftMenu.logout": "تسجيل خروج",
      "app.components.LeftMenu.plugins": "اضافات",
      "app.components.LeftMenu.navbrand.title": "الصفحة الرئيسية",
      "app.components.LeftMenu.general": "عام",
      "app.components.LeftMenuFooter.help": "المساعدة",
      "app.components.LeftMenuLinkContainer.plugins": "اضافات",
      "app.components.LeftMenu.plugins": "اضافات",
      "content-manager.containers.Home.pluginHeaderTitle": "ادارة المحتوى",
      "global.content-manager": "ادارة المحتوى",
      "global.media-library": "رفع الصور",
      "global.change-password": "تغيير كلمة السر",
      "Auth.form.currentPassword.label": "كلمة السر الحالية",
      "Auth.form.confirmPassword.label": "تأكيد كلمة السر",
      "Password": "كلمة السر",
      "Settings.profile.form.section.experience.interfaceLanguage": "لغة واجهة المستخدم",
      "Settings.profile.form.section.experience.mode.label": "واجهة المستخدم",
      "global.marketplace": "المتجر",
      "global.plugins": "اضافات",
      "global.settings": "الاعدادات",
      "Media Library": "رفع الصور",
      "app.components.Logout.profile": "الصفحة الشخصية",
      "global.profile": "الصفحة الشخصية",
      "Auth.form.firstname.label": "الاسم الاول",
      "Auth.form.lastname.label": "الاسم الثاني",
      "content-manager.HeaderLayout.button.label-add-entry": "إضافة عنصر",
      "app.utils.filters": "فلترة",
      "app.utils.add-filter": "إضافة فلتر",
      "content-manager.select.currently.selected": "{count} عناصر مختارة",
      "app.components.LeftMenu.navbrand.workplace": "مساحة العمل",
      "admin.pages.MarketPlacePage.helmet": "المتجر - الاضافات",
      "admin.pages.MarketPlacePage.offline.title": "انت غير متصل",
      "admin.pages.MarketPlacePage.plugins": "اضافات",
    },
    
  bootstrap() {},
}}};