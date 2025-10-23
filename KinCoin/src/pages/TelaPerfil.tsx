import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import  style  from "./StyleTelaPerfil";
import { Ionicons } from '@expo/vector-icons';


export default function TelaPerfil() {
  return (
    <ScrollView style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={style.headerTitle}>Perfil</Text>
        <View style={{ width: 28 }} /> {/* espaçamento para alinhar */}
      </View>

      {/* Foto e Nome */}
      <View style={style.profileSection}>
        <Image
          source={{ uri: "https://i.imgur.com/8Km9tLL.png" }}
          style={style.profileImage}
        />
        <Text style={style.profileName}>Jamba</Text>
        <Text style={style.levelText}>Level 17</Text>

        {/* Barra de Experiência */}
        <View style={style.progressBarContainer}>
          <View style={[style.progressBar, { width: "70%" }]} />
        </View>
        <Text style={style.experienceText}>Nível de experiência: Expert</Text>
      </View>

      {/* Seguidores e seguindo */}
      <View style={style.followContainer}>
        <View style={style.followBox}>
          <Text style={style.followNumber}>127</Text>
          <Text style={style.followLabel}>Seguidores</Text>
        </View>
        <View style={style.followBox}>
          <Text style={style.followNumber}>10</Text>
          <Text style={style.followLabel}>Seguindo</Text>
        </View>
      </View>

      {/* Informações */}
      <View style={style.infoContainer}>
        <Text style={style.infoText}>Membro desde: 04 de ago. de 2025</Text>
        <Text style={style.infoText}>Dias consecutivos: 26 🔥</Text>
      </View>

      {/* Proezas */}
      <View style={style.achievementsContainer}>
        <Text style={style.sectionTitle}>Proezas</Text>

        <View style={style.achievementItem}>
          <Ionicons name="ribbon" size={22} color="#FFD700" />
          <Text style={style.achievementText}>Primeiros passos</Text>
        </View>

        <View style={style.achievementItem}>
          <Ionicons name="school" size={22} color="#00BFFF" />
          <Text style={style.achievementText}>Desbravador dos números</Text>
        </View>

        <View style={style.achievementItem}>
          <Ionicons name="calculator" size={22} color="#32CD32" />
          <Text style={style.achievementText}>Mestre da Calculadora Mental</Text>
        </View>

        <TouchableOpacity style={style.viewAllButton}>
          <Text style={style.viewAllText}>Ver todas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
