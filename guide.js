// Không cần parse $response.body vì có thể nó undefined
var obj = {
  "status": 0,
  "products": [
    {
      "expirationDate": "2090-01-01T00:00:00.000Z",
      "expired": false,
      "productId": "com.algoriddim.djay_iphone_free.pro.monthly"
    }
  ]
};

$done({body: JSON.stringify(obj)});
