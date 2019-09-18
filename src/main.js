var menu = document.getElementById("readoubleSideMenu");

if (menu == null) {
  var menuBox = document.createElement("div");
  menuBox.style.position = "fixed";
  menuBox.style.top = "30px";
  menuBox.style.left = "10px";
  menuBox.style.backgroundColor = "rgba(255,255,255,0.8)";
  menuBox.setAttribute("id", "readoubleSideMenu");

  // 閉じるボタン
  var closeButtonBox = document.createElement("div");
  var closeButton = document.createElement("a");
  menuBox.appendChild(closeButtonBox);
  closeButtonBox.appendChild(closeButton);
  closeButton.setAttribute("id", "readoubleSideMenuClose");
  closeButton.innerHTML = "×";

  // メニュー
  var menuList = document.createElement("ul");
  menuList.setAttribute("id", "readoubleSideMenuList");
  menuBox.appendChild(menuList);
  var headlines = document.getElementById("content").querySelectorAll("h2, h3");
  Array.prototype.forEach.call(headlines, function (headline) {
    var text = headline.innerHTML;
    if (text == "ドキュメント章別ページ") {
      return !0;
    }
    headline.setAttribute("id", text);
    var item = document.createElement("li");
    if (headline.tagName == "H3") {
      item.style.marginLeft = "20px";
    } else {
      item.style.fontWeight = "bold";
    }
    item.innerHTML = '<a href="#' + text + '">' + text + "</a>";
    menuList.appendChild(item)
  });
  document.body.appendChild(menuBox);
}

// 閉じるボタン（またはmenuボタン）
document.getElementById('readoubleSideMenuClose').onclick = function() {
  if (document.getElementById("readoubleSideMenu") == null) {
    return;
  }
  var menuList = document.getElementById("readoubleSideMenuList");
  var closeButton = document.getElementById("readoubleSideMenuClose");
  var style = window.getComputedStyle(menuList);
  if (style.display === "block") {
    menuList.style.display = "none";
    closeButton.innerHTML = "menu";
    closeButton.style.fontSize = "0.8em"
  } else {
    menuList.style.display = "block";
    closeButton.innerHTML = "×";
    closeButton.style.fontSize = "1em"
  }
}