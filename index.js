export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. المسارات الصحيحة بتاعتك (أمثلة)
    if (url.pathname === "/") {
      return new Response("Welcome to the Home Page!", { status: 200 });
    } 
    
    // هنا بتحدد مسار المنتج زي ما هو موجود في صورتك
    else if (url.pathname === "/product.html") {
      // الكود الخاص بجلب بيانات المنتج
      return new Response("Product Page Content", { status: 200 });
    }

    // ==========================================
    // 2. أي حاجة غلط أو مسار مش موجود (Catch-all)
    // ==========================================
    const errorHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error 404</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; color: #fff; background-color: #222; }
          h1 { font-size: 50px; }
          p { font-size: 20px; }
        </style>
      </head>
      <body>
        <h1>Error 404</h1>
        <p>عفواً، الصفحة التي تبحث عنها غير موجودة.</p>
      </body>
      </html>
    `;

    return new Response(errorHTML, {
      status: 404,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
