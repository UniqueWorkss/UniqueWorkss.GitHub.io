// copyright.js

// 定义插件
function addCopyrightSection(hook, vm) {
  hook.doneEach(function () {
    // 移除之前添加的版权信息
    const existingCopyright = document.querySelector('.Copyright');
    if (existingCopyright) {
      existingCopyright.remove();
    }

    // 获取当前页面的URL
    const pageURL = window.location.href;

    // 从侧边栏获取当前活动项的标题
    let pageTitle = vm.route.title; // 默认使用文档标题
    const sidebarActiveItem = document.querySelector('.sidebar-nav .active');
    if (sidebarActiveItem) {
      const titleLinkElement = sidebarActiveItem.querySelector('a');
      if (titleLinkElement) {
        pageTitle = titleLinkElement.textContent.trim();
      }
    }

    // 创建版权信息的HTML
    const copyrightHTML = `
      <div class="content-wrapper"> <!-- 用于模拟内容区样式的新包装 div -->
        <div class="Copyright">
          <span class="Yuanchuang">原创</span>
          <span class="title">${pageTitle}</span> <!-- 在这里使用提取的侧边栏标题 -->
          <br>
          <p class="shared_link">${pageURL}</span>
          <br>
          <span class="text">本文章采用自定义协议，如若转载，请严格遵守协议要求</span>
          <div class="image-container">
          <img src="_media/cc.png" alt="Your Image">
      </div>
        </div>
      </div>
    `;

    // 添加版权信息到 docsify-pagination-container 之前
    const paginationContainer = document.querySelector('.docsify-pagination-container');
    paginationContainer.parentNode.insertBefore(
      document.createRange().createContextualFragment(copyrightHTML),
      paginationContainer
    );
  });
}