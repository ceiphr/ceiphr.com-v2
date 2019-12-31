import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import Helmet from 'react-helmet'
import Disqus from 'disqus-react';

import { CarbonAds } from '../components/common'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/

const Post = ({ data, location }) => {
    const post = data.ghostPost
    const readingTime = readingTimeHelper(post)
    const disqusShortname = 'ceiphr';
    const disqusConfig = {
        url: post.url,
        identifier: post.slug,
        title: post.title,
    };
    const createCarbonTag = () => ({
        __html: '<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CVAIKKQM&placement=ceiphrcom" id="_carbonads_js"></script>'
    });

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        <section className="hero">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        {post.title}
                                    </h1>
                                    <div className="media">
                                        <figure className="media-left image is-48x48">
                                            {post.primary_author.profile_image ?
                                                <img className="author-profile-image is-rounded" src={post.primary_author.profile_image} alt={post.primary_author.name} /> :
                                                <img className="default-avatar is-rounded" src="/images/icons/avatar.svg" alt={post.primary_author.name} />
                                            }
                                        </figure>

                                        <div className="media-content">
                                            <div className="content">
                                                <div className="is-pulled-left">
                                                    <p>{post.primary_author.name}</p>
                                                    <p>{readingTime}</p>
                                                </div>
                                                <div className="is-pulled-right">
                                                    {post.tags && <div className="tag is-primary"> <Tags post={post} visibility="public" autolink={false} /></div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={post.feature_image} alt={post.title} />
                            </figure> : null}
                        <div className="post-columns">
                            <section className="post-full-content">
                                {/* The main post content */}
                                <div
                                    className="content-body load-external-scripts"
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                />
                            </section>
                            <section className="post-sidebar">
                                <div className="post-sidebar-widgets">
                                    <div className="card">
                                        <a href="https://m.do.co/c/b95c2a8a5568" aria-label="DigitalOcean" rel="noopener">
                                            <div>
                                                <img src={"/images/icons/do.svg"} alt="DigitalOcean" />
                                            </div>
                                            <p>
                                                This website is hosted on DigitalOcean. Use my referral link for a discount.
                                            </p>
                                        </a>
                                    </div>
                                    <div
                                        className="card"
                                        dangerouslySetInnerHTML={createCarbonTag()}
                                    />
                                </div>
                            </section>
                        </div>
                    </article>
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
                    ghostPost(slug: {eq: $slug }) {
                    ...GhostPostFields
                }
                }
            `
