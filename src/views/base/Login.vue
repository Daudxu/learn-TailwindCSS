<template>
  <section class="bg-gray-50 dark:bg-gray-900 min-h-[100vh]" >
       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div class="p-6 space-y-4 md:space-y-6 sm:p-8  relative">
               <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                 <font-awesome-icon class="text-lime-500 mr-2" icon="user-secret" />Sign in     
               </h1>
               <span class="absolute  top-3 text-slate-700 left-8 cursor-pointer dark:text-slate-400">Home</span>
               <form class="space-y-4 md:space-y-6" action="#">
                   <div>
                       <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                       <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                       <div class="text-red-500 text-sm" id="username-error"></div>
                    </div>
                   <div>
                       <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                       <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                       <div class="text-red-500 text-sm" id="password-error"></div>
                    </div>
                   <div class="flex items-center justify-between">
                       <div class="flex items-start">
                           <div class="flex items-center h-5">
                             <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                           </div>
                           <div class="ml-3 text-sm">
                             <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                           </div>
                       </div>
                       <a href="#" class="text-sm text-black dark:text-white font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                   </div>
                   <div class="text-red-500 text-sm" id="password-error"></div>
                   <button type="submit" class="w-full md:min-w-[300px]  text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-primary-800">Sign in</button>
                   <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                       Don’t have an account yet? <a href="#" class="font-medium hover:underline text-blue-600">Sign up</a>
                   </p>
               </form>
               <div class="flex items-center mt-6">
                 <hr class="flex-grow border-gray-400 border-t">
                 <span class="mx-4 text-gray-500">or</span>
                 <hr class="flex-grow border-gray-400 border-t">
               </div>
 
               <div class="flex flex-wrap justify-center sm:justify-between mt-6">
                   <button class="bg-[#e2e8f0] hover:bg-white gradient-bg text-[#171717] min-w-full md:min-w-[180px]  flex justify-center items-center font-semibold py-2 px-4 rounded">
                     <svg version="1.1" class="mr-2" enable-background="new 0 0 19 19"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 19 19" xml:space="preserve" style="width: 20px;"><g id="logo_googleg_48dp" transform="translate(15.000000, 15.000000)"><path id="Shape" class="st0" fill="#4285F4" d="M3.31-5.13c0-0.64-0.06-1.25-0.16-1.84h-8.48v3.48h4.84c-0.21,1.12-0.84,2.08-1.8,2.72v2.26h2.91 C2.32-0.08,3.31-2.39,3.31-5.13L3.31-5.13z"></path><path id="Shape_1_" class="st1" fill="#34A853" d="M-5.33,3.67c2.43,0,4.47-0.81,5.96-2.18l-2.91-2.26c-0.81,0.54-1.84,0.86-3.05,0.86 c-2.34,0-4.33-1.58-5.04-3.71h-3.01v2.33C-11.9,1.65-8.85,3.67-5.33,3.67L-5.33,3.67z"></path><path id="Shape_2_" class="st2" fill="#FBBC05" d="M-10.37-3.62c-0.18-0.54-0.28-1.12-0.28-1.71s0.1-1.17,0.28-1.71v-2.33h-3.01 c-0.61,1.22-0.96,2.59-0.96,4.04s0.35,2.83,0.96,4.04L-10.37-3.62L-10.37-3.62z"></path><path id="Shape_3_" class="st3" fill="#EA4335" d="M-5.33-10.75c1.32,0,2.51,0.45,3.44,1.35l2.58-2.58c-1.56-1.45-3.6-2.34-6.02-2.34 c-3.52,0-6.56,2.02-8.04,4.96l3.01,2.33C-9.66-9.17-7.68-10.75-5.33-10.75L-5.33-10.75z"></path><path id="Shape_4_" class="st4" fill="none" d="M-14.33-14.33h18v18h-18V-14.33z"></path></g>
                     </svg>Google
                   </button>
                   <button class="bg-blue-500 hover:bg-blue-600 text-white min-w-full md:min-w-[180px] flex justify-center items-center  font-semibold py-2 px-4 rounded mt-4 md:ml-4 md:mt-0 ">
                     <svg version="1.1" class="mr-2"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 115 219" enable-background="new 0 0 115 219" xml:space="preserve" style="width: 10px; margin: 0px 6px; fill: rgb(255, 255, 255);"><path id="f" d="M74.61,219.06v-99.8h33.5l5.02-38.9H74.61V55.53c0-11.26,3.13-18.93,19.27-18.93l20.6-0.01V1.8 c-3.56-0.47-15.79-1.53-30.01-1.53c-29.7,0-50.02,18.13-50.02,51.41v28.68H0.86v38.9h33.58v99.8H74.61z"></path>
                     </svg>Facebook
                   </button>
               </div>
 
           </div>
       </div>
   </div>
 </section>

 </template>
 
 <script setup>
 import { useDark } from '@vueuse/core'
 const isDark = useDark()
 // const { x, y } = useMouse()

 const toggleIcon = () => {
       isDark.value = !isDark.value;
 }
 </script>
 
 <style  lang="less">
    body {
       overflow: hidden;
    }
    .gradient-bg {
      animation: gradientAnimation 15s linear infinite;
    }
    @keyframes gradientAnimation {
      0% {
        background-color: #ff9a9e;
      }
      20% {
        background-color: #fad0c4;
      }
      40% {
        background-color: #a18cd1;
      }
      60% {
        background-color: #fbc2eb;
      }
      80% {
        background-color: #ffecd2;
      }
      100% {
        background-color: #ff9a9e;
      }
    }

 </style>
 