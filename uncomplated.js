// 6 kyu: Basics 03: Strings, Numbers and Calculation:

// function calculateString(st) {
//     let a = [];
//     let b = [];
//     let filterArr = st.split("").filter((ele) => {
//       return +ele == ele || ["/", "-", "+", "*", "."].includes(ele);
//     });

//     const operIndex = filterArr.map((ele, index) => {
//       if (ele !== "." && +ele == NaN) return index;
//     });
//     return operIndex;
//   }

//   console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"));
//   console.log(+"5.0000");
