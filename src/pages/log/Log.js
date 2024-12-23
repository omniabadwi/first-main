import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./log.css";
function Log() {
  const [Language] = useState("ar");
  const [email, Setemail] = useState("");
  const [pass, Setpass] = useState("");
  const Navigate = useNavigate();
  function Submit(e) {
    e.preventDefault();

    Navigate("/Congra");
  }

  return (
      <div className="parennt">
          <div className="left-section">
              
                  <img src={require("../../Images/log/WhatsApp Image 2024-12-21 at 19.05.35_2d758ef3.jpg")} alt=""/>
              
          </div>

      <div className="log">
        <form
          onSubmit={Submit}
          className=" sty22"
          action=""
          dir={Language === "ar" ? "rtl" : "ltr"}
        >
          <div
            style={{ textAlign: "center", color: "#03333E", marginTop: "10px" }}
          >
            <h4>تسجيل الدخول</h4>
            <p style={{ fontSize: "16px", margin: "10px" }}>
              ابق على اطلاع على أحدث أخبار عالمك الاحترافي
            </p>
          </div>
          <label style={{ color: "#03333A" }}>
            {" "}
            البريد الالكتروني أو رقم الهاتف
          </label>
          <input
            className="form-control mb-2"
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={(e) => Setemail(e.target.value)}
          ></input>
          <label style={{ color: "#03333A" }}>كلمة المرور </label>
          <input
            className="form-control mb-2"
            placeholder="password"
            type="password"
            required
            value={pass}
            onChange={(e) => Setpass(e.target.value)}
          ></input>
          <Link
            to="/Passwordr"
            style={{
              color: "#A9543F",
              listStyle: "none",
              textDecoration: "none",
              margin: "5px",
            }}
          >
            هل نسيت كلمة السر
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "#A9543F",
                padding: "10px 30px",
                color: "#ffffff",
                borderRadius: "15px",
                marginTop: "5px",
              }}
            >
              تسجيل الدخول
            </button>
          </div>
          <h6 style={{ marginTop: "5px" }}>
            عضو جديد على الحرفي؟{" "}
            <Link
              to="/Join"
              style={{
                color: "#A9543F",
                listStyle: "none",
                textDecoration: "none",
              }}
            >
              انضم إلينا{" "}
            </Link>
          </h6>
        </form>
      </div>
      
    </div>
  );
}

export default Log;
