<?php

class HomeModel extends BaseModel
{
   function getLatestPosts(int $maxCount)
   {
        //   self::$db - return MSql - data
        $statement = self::$db->query(
            "SELECT posts.id, title, content, date, full_name " .
            "FROM posts LEFT JOIN users on posts.user_id = users.id " .
            "ORDER BY date DESC LIMIT " . $maxCount);
        return $statement->fetch_all(MYSQLI_ASSOC);
   }

    function getPostById(int $id)
    {
        $statement = self::$db->prepare(
            "SELECT posts.id, title, content, date, full_name, user_id " .
            "FROM posts LEFT JOIN users ON posts.user_id = users.id " .
            "WHERE posts.id = ?");
        $statement->bind_param("i", $id);
        $statement->execute();
        $result = $statement->get_result()->fetch_assoc();
        return $result;
    }

    function edit(string $id, string $title, string $content, string $date, int $user_id) : bool
    {
        $statement = self::$db->prepare(
            "UPDATE post SET title = ?, " .
            "content =?, date = ?, user_id = ? WHERE id = ?");
        $statement->bind_param("sssii", $title, $content, $date, $user_id, $id);
        $statement->execute();
        return $statement->affected_rows >= 0;
    }
}




























































































































