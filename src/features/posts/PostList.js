import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";

import ContentLoader from "react-content-loader";
import ReactTooltip from "react-tooltip";
import { Error } from "features/misc/Error";

import { PageContent } from "components/Page";

import { PostTimer } from "./components/PostTimer";
import { PostContent } from "./components/PostContent";
import { PostFooter, PostFooterRight } from "./components/PostFooter";
import { PostSignature } from "./components/PostSignature";
import { LikeButton } from "./components/LikeButton";
import { ShareButton } from "./components/ShareButton";

import { getPostListQuery } from "./actions/postActions";
import { getBlockedUsersQuery } from "./actions/blockActions";

export const PostList = () => {
  const [collection, isLoadingPosts, error] = useCollection(getPostListQuery());
  const [blockedCollection, isLoadingBlocked] = useCollection(
    getBlockedUsersQuery()
  );
  const docs = collection ? collection.docs : [];
  const blocked = blockedCollection ? blockedCollection.docs : [];

  const blockMap = blocked.reduce((map, bd) => {
    map[bd.data().blockedUser] = true;
    return map;
  }, {});

  const postDocs = docs.filter((pd) => {
    return !blockMap[pd.data().createdBy];
  });

  return (
    <PageContent>
      {(isLoadingPosts || isLoadingBlocked) && <FeedContentLoader />}
      {!isLoadingPosts && !isLoadingBlocked && error && <Error error={error} />}
      {!isLoadingPosts && !isLoadingBlocked && !postDocs.length && (
        <EmptyPost />
      )}
      {!isLoadingPosts && !isLoadingBlocked && !!postDocs.length && (
        <div>
          {postDocs.map((doc) => {
            const post = doc.data();
            if (post._flagged) return null;
            return (
              <PostContainer key={doc.id}>
                <Link to={`/${doc.id}`}>
                  <PostContent>{post.content}</PostContent>
                </Link>
                <PostFooter>
                  <PostSignature>{post.createdByDisplayName}</PostSignature>
                  <PostFooterRight>
                    <ShareButton postId={doc.id} />
                    <LikeButton postId={doc.id} post={post} />
                    <PostTimer post={post} />
                  </PostFooterRight>
                </PostFooter>
              </PostContainer>
            );
          })}
          <ReactTooltip
            effect="solid"
            event="mouseenter click"
            eventOff="mouseout"
          />
        </div>
      )}
    </PageContent>
  );
};

const FeedContentLoader = () => (
  <ContentLoader height={300} width="100%" speed={3}>
    <rect x="0" y="0" width="100%" height="25" rx="4" ry="4" />
    <rect x="0" y="40" width="100%" height="25" rx="4" ry="4" />
    <rect x="0" y="80" width="100%" height="25" rx="4" ry="4" />
    <rect x="0" y="120" width="100%" height="25" rx="4" ry="4" />
    <rect x="0" y="160" width="100%" height="25" rx="4" ry="4" />
    <rect x="0" y="200" width="100%" height="25" rx="4" ry="4" />
    <rect x="0" y="240" width="40%" height="25" rx="4" ry="4" />
  </ContentLoader>
);

const EmptyPost = () => (
  <EmptyPostContainer>
    <h1>
      It's kind of lonely here... could you help{" "}
      <Link to="/new">start something?</Link>
    </h1>
    <img src="/assets/reading.svg" alt="No posts" />
  </EmptyPostContainer>
);

const EmptyPostContainer = styled.section`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings(7)};
`;

export default PostList;
