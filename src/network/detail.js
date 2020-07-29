import {request2} from "./request";

export function getDetail(wid) {
  return request2({
    url: '/index.php/APIData/API/detail',
    params:{
      wid
    }
  })

}

export class Good{
  constructor(base,topimg,img,color,server,size,params) {
    this.id=base.g_id;
    this.name=base.g_name;
    this.class=base.class_id;
    this.comments=base.comments;
    this.commit=base.g_commit;
    this.favorit=base.g_favorit;
    this.newprice=base.g_newprice;
    this.olprice =base.g_olprice;
    this.sellnum =base.g_sellnum;
    this.stock=base.g_stock;
    this.title=base.g_title;
    this.log=base.shoplog;
    this.topimgList=topimg;
    this.imgList=img;
    this.colorList=color;
    this.serverList=server;
    this.sizeList= size;
    this.params=params;

  }

}
export class GoodInfo {
  constructor(base,color,server,size,params) {
    this.name=base.g_name;
    this.class=base.class_id;
    this.comments=base.comments;
    this.commit=base.g_commit;
    this.favorit=base.g_favorit;
    this.newprice=base.g_newprice;
    this.olprice =base.g_olprice;
    this.sellnum =base.g_sellnum;
    this.stock=base.g_stock;
    this.title=base.g_title;
    this.log=base.shoplog;
    this.colorList=color;
    this.serverList=server;
    this.sizeList= size;
    this.params=params;
  }
}
