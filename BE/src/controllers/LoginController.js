class LoginController {
  async checkAuth(req, res) {
    const enroll = await req.body;
    const fixEnroll = "SD"
    
      if (enroll.code == fixEnroll) {
        console.log("done true");
        res.json({ authorized: true });
      }else {
        console.log("done false");
        res.json({ authorized: false});
      }
    
    
  }
}

export default new LoginController();
