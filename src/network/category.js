import {request3} from "./request";

/**
 * 获取分类的数据
 * @returns {AxiosPromise}
 */
export function getCategory() {
  return request3({
    url: '/category'
  })
}

/**
 * 获取每个分类栏的数据
 * @param maitKey
 * @returns {AxiosPromise}
 */
export function getSubcategory(maitKey) {
  return request3({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

/**
 * 获取每个分类里面的商品信息
 * @param miniWallkey
 * @param type
 * @returns {AxiosPromise}
 */
export function getCategoryDetail(miniWallkey, type) {
  return request3({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
