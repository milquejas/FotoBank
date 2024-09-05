import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View className="w-full justify-center items-center min-h-[85vh] px-4">
      <Image
        source={images.logo}
        className="w-[130px] h-[84px]"
        resizeMode="contain"
      />
      <Image
        source={images.cards}
        className="max-w-[380px] w-full h-[300px]"
        resizeMode="contain"
      />
      <View className="relative mt-5">
        <Text className="text-3xl text-white font-bold text center">
          Discover Endless Possibilities with{" "}
          <Text className="text-secondary-200">FotoBank</Text>
        </Text>
        <Image
          source={images.path}
          className="w-[136px] h-[15px] absolute-bottom-2 -right-8"
          resizeMode="contain"
        />
      </View>
      <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
        Where creativity meets innovation: embark on a journey of limitless
        explorations with FotoBank
      </Text>
      <CustomButton
        title="Continue with Email"
        handlePress={() => router.push("/sign-in")}
        containerStyles="w-full mt-7"
      />

      {/* Additional Content Starts Here */}
      <View className="mt-10">
        <Text className="text-2xl text-white font-bold text-center">
          Explore Features
        </Text>
        <Text className="text-sm font-pregular text-gray-100 mt-3 text-center">
          FotoBank offers a wide range of features to unleash your creativity.
        </Text>
        <Image
          source={images.feature1}
          className="max-w-[380px] w-full h-[200px] mt-5"
          resizeMode="contain"
        />
        <Text className="text-sm font-pregular text-gray-100 mt-5 text-center">
          Easily organize and share your favorite photos with advanced tools.
        </Text>
      </View>

      <View className="mt-10">
        <Text className="text-2xl text-white font-bold text-center">
          Seamless Experience
        </Text>
        <Text className="text-sm font-pregular text-gray-100 mt-3 text-center">
          Our platform is designed for smooth and intuitive user experiences.
        </Text>
        <Image
          source={images.feature2}
          className="max-w-[380px] w-full h-[200px] mt-5"
          resizeMode="contain"
        />
        <Text className="text-sm font-pregular text-gray-100 mt-5 text-center">
          Enjoy lightning-fast uploads and easy editing tools.
        </Text>
      </View>

      <View className="mt-10">
        <Text className="text-2xl text-white font-bold text-center">
          Join the Community
        </Text>
        <Text className="text-sm font-pregular text-gray-100 mt-3 text-center">
          Connect with a vibrant community of photographers and creators.
        </Text>
        <Image
          source={images.feature3}
          className="max-w-[380px] w-full h-[200px] mt-5"
          resizeMode="contain"
        />
        <Text className="text-sm font-pregular text-gray-100 mt-5 text-center">
          Share your work and gain inspiration from others.
        </Text>
      </View>

      {/* Additional Content Ends Here */}
    </View>
  </ScrollView>
  <StatusBar backgroundColor="#161622" style="light" />
</SafeAreaView>

  );
}
