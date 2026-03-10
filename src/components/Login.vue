<script setup lang="ts">
import { ref } from 'vue'

// 修复：设定默认的填充数据，同时使其与表单状态双向绑定
const email = ref('admin@admin.com')
const password = ref('password')
const loading = ref(false)
const errorMsg = ref('')

const handleLogin = async () => {
  if (!email.value) {
    errorMsg.value = "邮箱不能为空"
    return
  }
  loading.value = true
  errorMsg.value = ""
  
  // 模拟发送基于 api.json 和 api-types.d.ts 约束的载荷数据结构
  setTimeout(() => {
    loading.value = false
    if (email.value === 'admin@admin.com') {
      alert("✅ 登录成功! 假装获得 Token => Bearer MockJwt...")
    } else {
      errorMsg.value = "账户不存在，请使用 admin@admin.com 体验"
    }
  }, 1000)
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <!-- Figma 原型概念还原：左右结构现代登录视窗 -->
    <div class="max-w-4xl w-full bg-surface rounded-2xl shadow-2xl overflow-hidden flex transform transition-all duration-300 hover:scale-[1.01]">
      
      <!-- 左侧：登录交互表单 -->
      <div class="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
        <div class="mb-10">
          <h1 class="text-3xl font-bold text-slate-800 tracking-tight">获客 CMS 空间</h1>
          <p class="text-sm text-secondary mt-2">欢迎回来！作为管理员，请您先登入获取您的内容引擎数据。</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-1">
            <label class="block text-sm font-semibold text-slate-700">超级管理员邮箱</label>
            <input 
              v-model="email" 
              type="email" 
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="admin@admin.com" 
            />
          </div>
          
          <div class="space-y-1">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-semibold text-slate-700">登录秘钥</label>
              <a href="#" class="text-xs text-primary font-medium hover:underline">忘了密码？</a>
            </div>
            <input 
              v-model="password" 
              type="password" 
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="••••••••" 
            />
          </div>

          <!-- 模拟接口级别的错误提示 -->
          <div v-if="errorMsg" class="text-red-500 text-sm font-medium animate-pulse">{{ errorMsg }}</div>

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full relative py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/30 transition-all disabled:opacity-70 flex justify-center items-center"
          >
            <span v-if="!loading">🚀 启动引擎 登录</span>
            <span v-else class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          </button>
        </form>
      </div>

      <!-- 右侧：设计感品牌或插画插图面 (通常响应式下移动端隐藏) -->
      <div class="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-900 p-12 flex-col justify-between relative overflow-hidden">
        <!-- 背景点缀图案概念 -->
        <div class="absolute inset-0 opacity-10 blur-xl">
          <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white flex"></div>
          <div class="absolute bottom-10 -left-10 w-48 h-48 rounded-full bg-blue-300 flex"></div>
        </div>

        <div class="relative z-10">
          <div class="bg-white/20 backdrop-blur-sm w-max px-3 py-1 rounded-full text-white/90 text-xs font-semibold mb-6 shadow-inner tracking-widest border border-white/10 uppercase">v1.0.0 Release</div>
          <h2 class="text-4xl text-white font-extrabold leading-tight">基于 Schema-First 的下一代内容管线。</h2>
        </div>
        
        <div class="relative z-10 text-blue-100 text-sm mt-8 border-l-2 border-blue-400 pl-4 space-y-2 font-medium">
          <p>✓ 类型安全：前后端统一接口模型强迫症认证</p>
          <p>✓ 极道渲染：尾风样式系统加持的极致布局</p>
          <p>✓ TDD：由测试与规格表闭环驱动</p>
        </div>
      </div>

    </div>
  </div>
</template>
