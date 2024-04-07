import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    bottom: 0,
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 20,
  },

  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },

  formField: {
    width: "90%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#f6f6f6",
    paddingLeft: 10,
    margin: 12,
    fontSize: 16,
  },

  buttonDefault: {
    width: "90%",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    margin: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
