let balanceIndex = (A) => {
  let N = A.length;
  let L = Array(N).fill(0), // [0,0,0,0]
    R = Array(N).fill(0); // [0,0,0,0]
  let beg = 1, // 1
    end = N - 2; // 4-2 ===== 2
  //  i=4; 4<4 >>>>>>> STOP
  for (let i = beg; i < N; ++i) {
    // L[1] = A[0]+L[0] >>>> 1+0 = 1
    // L[2] = A[1]+L[1] >>>> 2+1 = 3
    // L[3] = A[2]+L[2] >>>> 5+3 = 8
    // L = [0,1,3,8]
    L[i] = A[i - 1] + L[i - 1];
  }

  //       j = -1  ; -1<=2
  for (let j = end; 0 <= j; --j) {
    // R[2] = A[3] + R[3] >>>> 3 + 0 === 3
    // R[1] = A[2] + R[2] >>>> 5 + 3 === 8
    // R[0] = A[1] + R[1] >>>> 2 + 8 === 10
    // R = [10,8,3,0]
    R[j] = A[j + 1] + R[j + 1];
  }

  //       K = 2; 2 < 4;
  for (let k = 0; k < N; ++k) {
    // L[0] == R[0] >>>> 0 == 10 >>>> FALSE
    // l[1] == R[1] >>>> 1 == 8  >>>> FALSE
    // L[2] == R[2] >>>> 3 == 3  >>>> "True" >>>> return 2
    if (L[k] == R[k]) return k;
  }
  return -1;
};

console.log(balanceIndex([1, 2, 5, 3]));
