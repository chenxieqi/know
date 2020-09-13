// module.exports = {
//   devServer:{
//     host:'localhost',
//     port: 8080,
//     proxy:{
//         'api':{
//           target:'http://13.230.153.16',
//           changeOrigin:true,
//           pathRewrite:{
//             'api':''
//           }
//         }
//     },
//     productionSourceMap:false,
//     chainWebpack:config => {
//       config.plugin.delete('prefetch')
//     }
//   }
// }