import
fetch
from '@/utils/fetch';
export default {
  submitPic: (parmas) => fetch.post("/submitRw", parmas, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  getOrder: id => fetch.get(`/sdyRwDetail?ihrw_id=${id}`),
  cancelOrder: (id, remark) => fetch.get(`/cancelRw?id=${id}&remark=${remark}`)
}
