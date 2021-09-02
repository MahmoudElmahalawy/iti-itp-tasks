#include <iostream>
using namespace std;

int main(){

    int n;

    cout<<"Enter a number:\n";
    cin>>n;

    (n > 0) ?
    (cout<<n<<" is positive\n") :
    ( (n < 0) ?
      (cout<<n<<" is Negative\n") :
      (cout<<n<<" is Zero\n")
    );

    return 0;
}
