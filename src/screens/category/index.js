import React from "react";
import {
  ComponentWrapper,
  MainWrapper,
  RowWrapperBasic,
  ScrollWrapper,
} from "../../commons/Wrappers";
import { Text } from "../../core-ui";
import {
  Spacer,
  Avatar,
  CategoriesHeader,
  TextHeader,
  RecommendationCard,
} from "../../commons";
// import { useStyles } from "./styles";
import { totalSize } from "../../constants";
import { data } from "../../constants";
import { ProductSection, RecommendationSection } from "./components";

const CategoryScreen = () => {
  // const { styles } = useStyles();
  return (
    <MainWrapper>
      <Text>Category</Text>
    </MainWrapper>
  );
};

export default CategoryScreen;
