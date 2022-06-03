<template>
  <div class="flex justify-center items-center q-electron-drag" style="height: 100%">
    <div class="row base-card-shadow electron-hide" style="width: 60vw; min-width: 300px">
      <div class="col-6 flex justify-center items-center" v-show="$q.screen.gt.sm">
        <q-img
          width="100%"
          height="100%"
          src="https://images.unsplash.com/photo-1511140973288-19bf21d7e771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        >
        </q-img>
      </div>
      <q-separator vertical inset v-if="$q.screen.gt.sm" />
      <div class="col flex justify-center items-center">
        <q-card square style="min-width: 290px; height: 100%; width: 60%" class="no-shadow">
          <q-card-section align="center">
            <h3 class="text-uppercase">Login</h3>
            <!-- User -->
            <q-input clearable autofocus bottom-slots v-model="loginStore.User.UserName" label="User">
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <!-- Password -->
            <q-input
              bottom-slots
              v-model="loginStore.User.Password"
              label="Password"
              :type="loginStore.Option.ShowPassword ? 'password' : 'text'"
              hint=""
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="loginStore.Option.ShowPasswordwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="loginStore.Option.ShowPassword = !loginStore.Option.ShowPassword"
                />
              </template>
            </q-input>

            <!-- button login -->
            <q-btn
              :loading="loginStore.Option.Loading"
              class="logon-btn bg-logon-card-input"
              text-color="white"
              label="Login"
              style="font-size: large"
              @click="login"
            >
            </q-btn>
            <!-- <div class="row justify-between" style="margin-bottom: 20px">
              <q-btn flat label="register" />
              <q-btn outline label="clear" />
            </div> -->
            <p class="text-grey q-mt-lg" align="center">
              Developed with
              <q-icon size="sm" name="las la-heartbeat" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
              <q-icon size="sm" name="lab la-vuejs" color="green" class="q-mr-sm"></q-icon>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
//import
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useLoginStore } from '../stores/Login/index';
//user
const $q = useQuasar();
const $router = useRouter();
const loginStore = useLoginStore();

const login = () => {
  loginStore.Option.Loading = !loginStore.Option.Loading;
  if (loginStore.User.UserName === 'admin' || loginStore.User.UserName === 'test') {
    const lt = setTimeout(() => {
      $router.push('/home').then(() => {
        clearTimeout(lt);
        loginStore.Option.Loading = !loginStore.Option;
      });
    }, Math.random() * 3000);
  } else {
    loginStore.Option.Loading = !loginStore.Option;
  }
};
</script>

<style scoped>
.logon-btn {
  font-size: large;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 100%;
}

.bg-logon-card-input {
  background: linear-gradient(to right, #36d1dc 1%, #5b86e5 99%);
  transition: all 0.3s ease-in-out;
  background-size: 200% auto;
  margin-top: 10px;
}

.bg-logon-card-input:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #5b86e5;
}
</style>
