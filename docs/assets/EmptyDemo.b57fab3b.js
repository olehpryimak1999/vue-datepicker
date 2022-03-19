import{U as i}from"./vue-datepicker.es.2e42d456.js";import{u as l,r as d,o as r,c as s,a as u}from"./app.00f9f84e.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const c={components:{Datepicker:i},props:["placeholder","noToday","minTime","maxTime","startDate","startTime","disabledWeekDays","allowedDates","showNowButton","nowButtonLabel","multiDates","flow","minRange","maxRange","range","multiDatesLimit","weekPicker","monthPicker"],data(){return{date:null,dark:!0}},mounted(){this.dark=l()},computed:{hasAllowedDates(){return this.allowedDates?[new Date,new Date(new Date().setDate(new Date().getDate()+1))]:[]}}},k={class:"demo-wrap"};function D(h,a,e,f,t,n){const o=d("Datepicker");return r(),s("div",k,[u(o,{modelValue:t.date,"onUpdate:modelValue":a[0]||(a[0]=m=>t.date=m),placeholder:e.placeholder,dark:t.dark,"no-today":e.noToday,"min-time":e.minTime,"max-time":e.maxTime,"start-date":e.startDate,"start-time":e.startTime,"disabled-week-days":e.disabledWeekDays,"allowed-dates":n.hasAllowedDates,"show-now-button":e.showNowButton,"now-button-label":e.nowButtonLabel,"multi-dates":e.multiDates,"min-range":e.minRange,"max-range":e.maxRange,range:e.range,flow:e.flow,"multi-dates-limit":e.multiDatesLimit,"week-picker":e.weekPicker,"month-picker":e.monthPicker},null,8,["modelValue","placeholder","dark","no-today","min-time","max-time","start-date","start-time","disabled-week-days","allowed-dates","show-now-button","now-button-label","multi-dates","min-range","max-range","range","flow","multi-dates-limit","week-picker","month-picker"])])}var _=w(c,[["render",D]]);export{_ as default};
