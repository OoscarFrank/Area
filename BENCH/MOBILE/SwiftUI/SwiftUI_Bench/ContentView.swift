
import SwiftUI

struct Login: View {
    @State private var username: String = ""
    @State private var password: String = ""

    var onLoginSuccess: () -> Void
    var onPasswordForgotten: () -> Void

    var body: some View {
        VStack {
            Spacer()
            Image(systemName: "circle.fill")
                .resizable()
                .frame(width: 80, height: 80)
                .foregroundColor(.blue)
                .padding(.bottom, 50)

            TextField("Login", text: $username)
                .padding()
                .background(Color.white)
                .cornerRadius(5.0)
                .padding(.horizontal, 50)

            SecureField("Password", text: $password)
                .padding()
                .background(Color.white)
                .cornerRadius(5.0)
                .padding(.horizontal, 50)

            Button(action: onPasswordForgotten) {
                Text("Forgotten password")
                    .foregroundColor(.blue)
                    .padding()
            }

            Button(action: onLoginSuccess) {
                Text("Connexion")
                    .foregroundColor(.white)
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color.blue)
                    .cornerRadius(10)
                    .padding(.horizontal, 50)
            }

            Spacer()
        }
        .background(Color(.systemGray6))
        .edgesIgnoringSafeArea(.all)
    }
}

struct ForgottenPwd: View {
    var onRequestComplete: () -> Void

    var body: some View {
        VStack {
            Button("Reset Password") {
                onRequestComplete()
            }
        }
    }
}

struct Home: View {
    var body: some View {
        Text("Welcome to Home!")
    }
}

struct ContentView: View {
    @State private var isShowingLogin = true
    @State private var isShowingHome = false
    @State private var isShowingForgottenPwd = false

    var body: some View {
        NavigationView {
            VStack {
                if isShowingLogin {
                    Login(onLoginSuccess: {
                        self.isShowingHome = true
                        self.isShowingLogin = false
                    }, onPasswordForgotten: {
                        self.isShowingForgottenPwd = true
                        self.isShowingLogin = false
                    })
                } else if isShowingHome {
                    Home()
                } else if isShowingForgottenPwd {
                    ForgottenPwd(onRequestComplete: {
                        self.isShowingLogin = true
                        self.isShowingForgottenPwd = false
                    })
                }
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
