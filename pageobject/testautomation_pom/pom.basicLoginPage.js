class POM_BASICLOGINPAGE {
  constructor() {
    this.username_field = 'input[id=username]';
    this.password_field = 'input[id=password]';
    this.submit_button = 'button[id=submit]';
    this.error_text = 'div[id=error]';
    this.success_text = 'h1[class=post-title]';
    this.logout_button = "//a[text()='Log out']"
  }
}

module.exports = POM_BASICLOGINPAGE;
