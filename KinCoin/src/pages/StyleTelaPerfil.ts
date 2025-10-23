import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F1A",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  profileSection: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },

  profileName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },

  levelText: {
    color: "#FFD700",
    fontSize: 16,
    marginTop: 4,
  },

  progressBarContainer: {
    width: "80%",
    height: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    marginTop: 8,
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#FFD700",
    borderRadius: 10,
  },

  experienceText: {
    color: "#bbb",
    marginTop: 6,
    fontSize: 14,
  },

  followContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },

  followBox: {
    alignItems: "center",
    marginHorizontal: 20,
  },

  followNumber: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  followLabel: {
    color: "#bbb",
    fontSize: 14,
  },

  infoContainer: {
    alignItems: "center",
    marginVertical: 10,
  },

  infoText: {
    color: "#ccc",
    fontSize: 14,
    marginVertical: 2,
  },

  achievementsContainer: {
    backgroundColor: "#151A25",
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  achievementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  achievementText: {
    color: "#ddd",
    fontSize: 15,
    marginLeft: 10,
  },

  viewAllButton: {
    alignSelf: "flex-end",
    marginTop: 5,
  },

  viewAllText: {
    color: "#00BFFF",
    fontSize: 14,
  },
  Ionicons:{

  }
});