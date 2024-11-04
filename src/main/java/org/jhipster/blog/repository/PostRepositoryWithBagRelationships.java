package org.jhipster.blog.repository;

import java.util.List;
import java.util.Optional;
import org.jhipster.blog.domain.Post;
import org.springframework.data.domain.Page;

public interface PostRepositoryWithBagRelationships {
    Optional<Post> fetchBagRelationships(Optional<Post> post);

    List<Post> fetchBagRelationships(List<Post> posts);

    Page<Post> fetchBagRelationships(Page<Post> posts);
}
