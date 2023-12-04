from flask import Flask, jsonify, request
import jwt

app = Flask(__name__)
Users = []


@app.route("/auth/register", methods=["POST"])
def register():
    if (not request.json.get("email") or not request.json.get("password") or not request.json.get("firstName") or not request.json.get("lastName")):
        return jsonify({"msg": "Missing informations"}), 400

    for user in Users:
        if user["email"] == request.json.get("email"):
            return jsonify({"msg": "User already exists"}), 400

    user = {
        "email": request.json.get("email"),
        "password": request.json.get("password"),
        "firstName": request.json.get("firstName"),
        "lastName": request.json.get("lastName")
    }
    Users.append(user)
    return jsonify({"msg": "ok", "token" : jwt.encode(user, "Secret")}), 200


@app.route("/auth/login", methods=["POST"])
def login():
    if (not request.json.get("email") or not request.json.get("password")):
        return jsonify({"msg": "Missing informations"}), 400

    for user in Users:
        if user["email"] == request.json.get("email") and user["password"] == request.json.get("password"):
            return jsonify({"msg": "ok", "token" : jwt.encode(user, "Secret")}), 200

    return jsonify({"msg": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, port=8080)