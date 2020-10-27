// By @Xamarin_Developer From Yazd CS

window.addEventListener("DOMContentLoaded", function() {
    var s = document.createElement('script');
    s.textContent = `Course.prototype.getTableRow = function () {
    return \`
<tr>
    <td><button onclick="window.open('http://\${this.link}')">ورود به کلاس</button></td>
    <td><button onclick="myFunction('\${this.link}')">کپی لینک کلاس</button></td>
    <td>\${this.courseId}</td>
    <td>\${this.courseName}</td>
    <td>\${this.Teacher}</td>
</tr>\`
}`;
    (document.head || document.documentElement).appendChild(s);
}, false);