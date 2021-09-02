#include <iostream>
using namespace std;

int main(){
    int n, i, j, row, column;

    cout<<"Enter square's number of width and height cells: \n";
    cin>>n;

    if (n % 2 == 0){
        cout<<"Number must be odd\n";
    }else{
        int square[n][n];

        row = 1;
        column = (n+1)/2;

        square[row][column] = 1;

        for (i = 2; i <= n*n; i++){
            //cout<<i%n<<"\n";
            if ((i-1) % n != 0){
                row--;
                column--;

                if (row == 0){
                    row = n;
                }
                if (column == 0){
                    column = n;
                }
            }else if ((i-1) % n == 0){
                row++;
                if (row == n+1){
                    row = 1;
                }
            }
            square[row][column] = i;
        }

        for (int i = 1; i <= n; ++i){
            for (int j = 1; j <= n; ++j){
                //cout<<"["<<i<<"]"<<"["<<j<<"]"<<"  ";
                cout << square[i][j] << '\t';
                if (j % n == 0) cout<<'\n';

            }
        }
    }

    return 0;

}
