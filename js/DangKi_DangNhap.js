//kiểm tra đăng kí, đăng nhập
$(document).ready(function() {
    //1.kiểm tra đăng nhập
    function kiemTraTenNguoiDung_DangNhap() {
        var re = /^[a-z0-9_-]{3,16}$/;
        if ($("#inputUserName").val() == "") {
            $("#errname").html("Tên người dùng không được để trống");
            $("#errname").addClass("error");
            return false;
        }
        if (!re.test($("#inputUserName").val())) {
            $("#errname").html("* Tên người dùng không hợp lệ");
            $("#errname").addClass("error");
            return false;
        }
        $("#errname").html("");
        return true;
    }
    $("#inputUserName").blur(kiemTraTenNguoiDung_DangNhap);

    function kiemTraMatKhau_DangNhap() {
        var re = /^.{8,}$/;
        if ($("#inputPassword").val() == "") {
            $("#errpass").html("Mật khẩu không được để trống");
            $("#errpass").addClass("error");
            return false;
        }
        if (!re.test($("#inputPassword").val())) {
            $("#errpass").html("* Mật khẩu không hợp lệ, từ 8 kí tự trở lên");
            $("#errpass").addClass("error");
            return false;
        }
        $("#errpass").html("");
        return true;
    }
    $("#inputPassword").blur(kiemTraMatKhau_DangNhap);

    function DangNhap() {
        if (kiemTraTenNguoiDung_DangNhap() && kiemTraMatKhau_DangNhap()) {
            alert("Đăng nhập thành công");
            $("#logInModal").modal("hide");
        }
    }
    $("#btnLogin").click(DangNhap);
    //2.kiểm tra đăng kí
    function kiemTraTenNguoiDung_DangKi() {
        var re = /^[a-z0-9_-]{3,16}$/;
        if ($("#inputUserName").val() == "") {
            $("#errname").html("Tên người dùng không được để trống");
            $("#errname").addClass("error");
            return false;
        }
        if (!re.test($("#inputUserName").val())) {
            $("#errname").html("Tên người dùng không hợp lệ, từ 3 kí tự trở lên");
            $("#errname").addClass("error");
            return false;
        }
        $("#errname").html("");
        return true;
    }
    $("#inputUserName").blur(kiemTraTenNguoiDung_DangKi);

    function kiemTraMatKhau_DangKi() {
        var re = /^.{8,}$/;
        if ($("#inputPassword").val() == "") {
            $("#errpass").html("Mật khẩu không được để trống");
            $("#errpass").addClass("error");
            return false;
        }
        if (!re.test($("#inputPassword").val())) {
            $("#errpass").html("Mật khẩu không hợp lệ, từ 8 kí tự trở lên");
            $("#errpass").addClass("error");
            return false;
        }
        $("#errpass").html("");
        return true;
    }
    $("#inputPassword").blur(kiemTraMatKhau_DangKi);
    //kiểm tra confirm mật khẩu

    const password = $("#inputPassword").val().trim();
    const confirmPassword = $("#inputPasswordConfirm").val().trim();

    function validatePassword() {
        if (password !== confirmPassword) {
            $("errpassconfirm").text("Mật khẩu không khớp");
            return false;
        } else {
            $("errpassconfirm").text("");
            return true;
        }
    }
    $("#inputPasswordConfirm").blur(validatePassword);

    function kiemTraEmail() {
        var re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if ($("#inputEmail").val() == "") {
            $("#erremail").html("Email không được để trống");
            $("#erremail").addClass("error");
            return false;
        }
        if (!re.test($("#inputEmail").val())) {
            $("#erremail").html("Email không hợp lệ");
            $("#erremail").addClass("error");
            return false;
        }
        $("#erremail").html("");
        return true;
    }
    $("#inputEmail").blur(kiemTraEmail);

    function kiemTraSoDienThoai() {
        var re = /^(84|\+84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$/;
        if ($("#inputPhone").val() == "") {
            $("#errphone").html("Số điện thoại không được để trống");
            $("#errphone").addClass("error");
            return false;
        }
        if (!re.test($("#inputPhone").val())) {
            $("#errphone").html("Số điện thoại không hợp lệ");
            $("#errphone").addClass("error");
            return false;
        }
        $("#errphone").html("");
        return true;
    }
    $("#inputPhone").blur(kiemTraSoDienThoai);
    $("#btnSignUp").on('click', function() {
        var valid = true;
        valid = kiemTraTenNguoiDung_DangKi() && valid;
        valid = kiemTraMatKhau_DangKi() && valid;
        valid = validatePassword() && valid;
        valid = kiemTraEmail() && valid;
        valid = kiemTraSoDienThoai() && valid;
        if (!valid) {
            alert("Đăng kí thất bại");
        } else {
            alert("Đăng kí thành công");
            $("#signUpModal").modal("hide");
        }
    });
});