/* 
Filename: SophisticatedCode.js 
Content: This code demonstrates a complex solution for finding the longest common subsequence between two strings using dynamic programming.
*/

function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let result = '';
  let i = m,
    j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result = str1[i - 1] + result;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return result;
}

const string1 = 'dynamic programming';
const string2 = 'complex solution for programming';

const lcs = longestCommonSubsequence(string1, string2);
console.log(`Longest Common Subsequence: ${lcs}`);