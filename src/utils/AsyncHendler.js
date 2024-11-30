const AsyncHandler = (requestHendlear) => {
  (req, res, next) => {
    Promise.resolve(requestHendlear(req, res, next)).catch((error) =>
      error.next()
    );
  };
};

export { AsyncHandler };












//it is async Matahd Top matahd is Promise

// const asyncHandler = (func)=> async(req, res, next)=>{
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             Message: err.message
//         })
//     }
// }
