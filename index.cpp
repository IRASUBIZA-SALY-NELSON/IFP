#include <iostream>
use namespace std;
int namespace userDefined{
    int insideNamespace =100;
    int cout(){
        return insideNamespace;
    }
}
int myGlobal =200;
int cout(){
    return myGlobal*myGlobal;
}
int main(){
int cout =700;
  cout<<"The local variable cout in main is"<< cout <<endl;
  cout<<"The variable in userDefined namespace is"<< userDefined::insideNamespace<<endl;
  cout<<"The output of cout() in userDefined is"<<userDefined::cout()<<endl;
  cout<<"The value of myGlobal  is"<<myGlobal<<endl;
  cout<<" The output of global cout() is"<<::cout()<<endl;
    return 0;
}