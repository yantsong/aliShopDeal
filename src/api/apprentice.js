import fetch from '@/utils/fetch';
export default {
    getInviteInfo: () => fetch('api/inviteinfo'),
    getApprenticeList: () => fetch('/api/apprenticelist'),
    getHistoryCode: () => fetch(`/api/historyCode`),
    getIntegralDetail: () => fetch(`api/integralDetail`)
}
