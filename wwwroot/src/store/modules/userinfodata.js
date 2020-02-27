import UserInfoDataClass from '../../assets/js/userinfodata'
const state = {
    userInfo: {}
};
const getters = {
    userInfoData(state) {
		return state.userInfo;
	},
};
const mutations = {
    FETCH_USER_INFO_DATA(state) {
        var userInfoDataClass = new UserInfoDataClass();
        userInfoDataClass.getUserInfoData().then(data => {
            return state.userInfo = data;
        }).catch(err => {
            console.log(err)
        })
    }
};
const actions = {
    async fetchUserInfoData(context) {
        context.commit('FETCH_USER_INFO_DATA');
    },
};

const userInfoModule = {
    state,
    getters,
    mutations,
    actions
};
export default userInfoModule;